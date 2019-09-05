import { crawlOptionBoards } from "./helpers/parseoptionsboards";
import { crawlInsights } from './helpers/parseinsights';
import { crawlDataPreview } from './helpers/parsedatapreview';
import { crawlCookies } from './helpers/fetchcookies';
import { logOut } from './helpers/logout';

import { optionsCookies, optionsBoards, optionsDataPreviews, optionsInsights, optionsLogOut } from './options'

let NewsModel = require('./models/news');

const schedule = require('node-schedule');


let getData = async (fn, options) => {
    return await fn(options);
}

let filterDuplicateData = async (list) => {
    let arr = [];
    for (let index = 0; index < list.length; index++) {
        const item = list[index];
        let count = await NewsModel.count({ hashId: item.hashId });
        if (count < 1) arr.push(item);
        else debug('dup', item.hashId)
    }
    return arr;
}

let _modules = [
    {
        fn: crawlInsights,
        option: optionsInsights,
        message: 'get Data crawlInsights OK !!!',
        filter: filterDuplicateData,
        model: NewsModel,
        action: getData
    },
    {
        fn: crawlDataPreview,
        option: optionsDataPreviews,
        message: 'get Data crawlDataPreview OK !!!',
        filter: filterDuplicateData,
        model: NewsModel,
        action: getData
    },
    {
        fn: crawlOptionBoards,
        option: optionsBoards,
        message: 'get Data crawlOptionBoards OK !!!',
        filter: filterDuplicateData,
        model: NewsModel,
        action: getData
    }
]

let scheduleJobs = async () => {

    await getCookies();

    for (let index = 0; index < _modules.length; index++) {
        const iterator = _modules[index];
        let data = await iterator.filter(await iterator.action(iterator.fn, iterator.option));
        await iterator.model.create(data);
    }
    setTimeout(async () => { await logOut(optionsLogOut) }, 1000 * 60);
}

let boot = async () => {
    debug("Start BOOT !!! ");
    let time = '* 8,12,18,0 * * *';
    // let time = '9,12,16 * * * *'
    schedule.scheduleJob(time, async () => {
        await scheduleJobs();
    });
}

async function getCookies() {
    await getData(crawlCookies, optionsCookies);
}

boot();