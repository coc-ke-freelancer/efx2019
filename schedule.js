import { crawlOptionBoards } from "./helpers/parseoptionsboards";
import { crawlInsights } from './helpers/parseinsights';
import { crawlDataPreview } from './helpers/parsedatapreview';
import { crawlCookies } from './helpers/fetchcookies';
const moment = require('moment-timezone');
const uuidv4 = require('uuid/v4');

import { optionsCookies, optionsBoards, optionsDataPreviews, optionsInsights } from './options'

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


let rand = moment();

let randomTime = () => {
    let type = "minutes"
    let type2 = "seconds"
    let listtime = [];
    let min = 0;
    let max = 1;
    let min2 = 0;
    let max2 = 60;
    rand.add(parseInt(Math.random() * (+max - +min) + +min), type);
    rand.add(parseInt(Math.random() * (+max2 - +min2) + +min2), type2);
    listtime.push(rand.toString());
    rand.add(parseInt(Math.random() * (+max - +min) + +min), type);
    rand.add(parseInt(Math.random() * (+max2 - +min2) + +min2), type2);
    listtime.push(rand.toString());
    rand.add(parseInt(Math.random() * (+max - +min) + +min), type);
    rand.add(parseInt(Math.random() * (+max2 - +min2) + +min2), type2);
    listtime.push(rand.toString());
    return listtime;
}

let scheduleJobs = (queue) => {
    trace("QUEUE", queue);
    for (const iterator of _modules) {
        let time = queue.schedule.shift();
        schedule.scheduleJob(time, async () => {
            queue.count = queue.count + 1;
            if (queue.count > 2) {
                trace("first remove", queueList.length);
                queueList = queueList.filter(q => {
                    return queue.id !== q.id;
                });
                trace("last remove", queueList.length);
            }
            iterator.model.create(await iterator.filter(await iterator.action(iterator.fn, iterator.option)))
                .then(result => {
                    debug('after', time, ' ', iterator.message);
                });
        });
    }
}

let queueList = [];

let i = 0;

let boot = async () => {
    debug("Start BOOT !!! ", queueList.length);
    let listtime = randomTime();
    if (queueList.length < 10) {
        queueList.push({
            id: uuidv4(),
            schedule: listtime,
            count: 0,
            status: true,
            added: false
        });
        trace("Push ", listtime.join(", "));
        boot();
    }
    else {
        i++;
        trace("stop push queue");
        setTimeout(boot, 30000);
    }
}

setInterval(() => {
    for (const queue of queueList) {
        queue.added = true;
        scheduleJobs(queue);
    }
}, 10000);

async function getCookies() {
    await getData(crawlCookies, optionsCookies).then(result => {
        debug('get Cookies OK !!!');
    });
}

setInterval(getCookies, 1000 * 60 * 60 * 11);
getCookies();
boot()
