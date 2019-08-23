import { crawlOptionBoards } from "./helpers/parseoptionsboards";
import { crawlInsights } from './helpers/parseinsights';
import { crawlDataPreview } from './helpers/parsedatapreview';
import { crawlCookies } from './helpers/fetchcookies';
const moment = require('moment-timezone');
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
        schedule: "20 * * * *",
        fn: crawlInsights,
        option: optionsInsights,
        message: 'get Data crawlInsights OK !!!',
        filter: filterDuplicateData,
        model: NewsModel,
        action: getData
    },
    {
        schedule: "40 * * * *",
        fn: crawlDataPreview,
        option: optionsDataPreviews,
        message: 'get Data crawlDataPreview OK !!!',
        filter: filterDuplicateData,
        model: NewsModel,
        action: getData
    },
    {
        schedule: "0 * * * *",
        fn: crawlOptionBoards,
        option: optionsBoards,
        message: 'get Data crawlOptionBoards OK !!!',
        filter: filterDuplicateData,
        model: NewsModel,
        action: getData
    }
]

// schedule.scheduleJob("* */12 * * *", async () => {
//     await getCookies();
// });


let randomTime = () => {
    let time = new Date();
    let listtime = [];
    let min = 10;
    let max = 90;
    let random = [];
    for (let i = 0; i < 3; i++) {
        random.push(parseInt(Math.random() * (+max - +min) + +min));
        listtime.push(moment(time).add(random[i], 'seconds').toString());
    }
    return listtime;
}


let scheduleJobs = (listtime) => {
    debug('Im in schedule', listtime)
    for (let i = 0; i < listtime.length; i++) {
        schedule.scheduleJob(listtime[i], async () => {
            debug('after work: ', listtime[i]);
        })

        // for (const iterator of _modules) {
        //     schedule.scheduleJob(listtime[i], async () => {
        //         iterator.model.create(await iterator.filter(await iterator.action(iterator.fn, iterator.option)))
        //             .then(result => {
        //                 debug('after', listtime[i], ' ', iterator.message);
        //             });
        //     });
        // }
    }


}


let boot = async () => {
    debug("Start BOOT !!!");
    let listtime = randomTime();
    scheduleJobs(listtime);

    // await getCookies();
    // for (const iterator of _modules) {
    //     iterator.model.create(await iterator.filter(await iterator.action(iterator.fn, iterator.option)))
    //         .then(result => {
    //             debug(iterator.message);
    //         });
    // }
}

boot()

// async function getCookies() {
//     await getData(crawlCookies, optionsCookies).then(result => {
//         debug('get Cookies OK !!!');
//     });
// }

