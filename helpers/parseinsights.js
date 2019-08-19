const cheerio = require("cheerio");
const moment = require('moment-timezone');
const request = require("request");
const xxhash = require('xxhashjs');
import { fetchImage } from './fetchimage';

let crawlInsights = (options) => {
    return new Promise(resolve => {
        request(options, function (error, response, body) {

            if (error) throw new Error(error);
            let $ = cheerio.load(body.toString());
            let insights = [];

            //bank row
            let bank_row = $(".t-bank-row");
            bank_row.each((i, d) => {
                let first = $(d).text().trim().split("\n")[0];
                let { groups } = /^(?<month>[A-z]+)(?<day>[0-9]+)/gmi.exec(first);
                groups.time = $(d).text().trim().split("\n")[1].split('\t').pop();
                groups.title = $(d).text().trim().split("\t").pop();

                let ymdt = new Date().getFullYear() + "-" + groups.month + "-" + groups.day + " " + groups.time;
                let timeMoment = moment.tz(ymdt, 'YYYY-MMM-DD, hh:mm A', "America/Los_Angeles").format();
                groups.timemoment = timeMoment;
                groups.timeStamp = new Date(timeMoment).getTime();
                groups.type = 'insights';
                insights.push(JSON.parse(JSON.stringify(groups)));
            });

            fetchImage('https://plus.efxdata.com/news/dccad22e84c78cead226cf3c02aa50c4/image_1565559784_0.png_0.png',
                './image/b.png', (result) => { console.log(result); });

            // descrition
            let descrition = $(".newsBody");
            descrition.each((i, d) => {
                insights[i].description = $(d).attr("data-body");
                let $$ = cheerio.load(insights[i].description);
                insights[i].imgs = [];
                $$("img").each((i2, d2) => {
                    let url = $$(d2).attr("src");
                    url = url.substring(0, url.indexOf('?'));

                    let formatFile = url.split('.').pop();
                    let hashUrl = xxhash.h32(url, 0x001).toString(16);

                    fetchImage('https://' + options.headers.authority + url, './image/' + hashUrl + '.' + formatFile,
                        (err) => console.log(err));
                    insights[i].imgs.push(url);
                });
                // console.log(insights[i]);
            });
            return resolve(insights);
        });
    });
}
// let somtthing = async () => {
//     let optionsInsights = {
//         method: 'GET',
//         url: 'https://plus.efxdata.com/news/insights',
//         headers:
//         {
//             'postman-token': 'dd27f530-8d47-b761-fb4f-7de98de81d8b',
//             cookie: '__cfduid=d713325238546bf76e24c95e00703d0de1566042736; _ga=GA1.2.1408687129.1566042739; _gid=GA1.2.2029228213.1566042739; PHPSESSID=nr2viam18mjr4rnaves60tn3uu5hct1b',
//             'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en;q=0.6,en-US;q=0.5',
//             // 'accept-encoding': 'gzip, deflate, br',
//             'sec-fetch-site': 'none',
//             accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
//             dnt: '1',
//             'sec-fetch-user': '?1',
//             'sec-fetch-mode': 'navigate',
//             'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36',
//             'upgrade-insecure-requests': '1',
//             'cache-control': 'no-cache',
//             pragma: 'no-cache',
//             authority: 'plus.efxdata.com'
//         }
//     };
//     let a = await crawlInsights(optionsInsights);
//     console.log(a);
// }

// somtthing();

export { crawlInsights }