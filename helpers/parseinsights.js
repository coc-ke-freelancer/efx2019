const cheerio = require("cheerio");
const moment = require('moment-timezone');
let request = require("request");
const xxhash = require('xxhashjs');
import { fetchImage } from './fetchimage';
const FileCookieStore = require('tough-cookie-filestore');
const j = request.jar(new FileCookieStore('./cookies.json'));
request = request.defaults({ jar: j });

let crawlInsights = (options) => {
    return new Promise(resolve => {
        request(options, (error, response, body) => {
            console.log(options);

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
                groups.timestamp = new Date(timeMoment).getTime();
                groups.type = 'insights';
                insights.push(JSON.parse(JSON.stringify(groups)));
            });

            // descrition
            let descrition = $(".newsBody");
            descrition.each((i, d) => {
                insights[i].description = $(d).attr("data-body");
                let $$ = cheerio.load(insights[i].description);
                $$("img").each(async (i2, d2) => {
                    let url = $$(d2).attr("src");
                    insights[i].description = insights[i].description.replace(url, '__0x01__')
                    url = url.substring(0, url.indexOf('?'));

                    let formatFile = url.split('.').pop();
                    let hashUrl = xxhash.h32(url, 0x001).toString(16);
                    insights[i].description = insights[i].description.replace(
                        '__0x01__',
                        `https://api-efx.caybua.com/images/${hashUrl}.${formatFile}`
                    );

                    await fetchImage('https://' + options.headers.authority + url, './images/' + hashUrl + '.' + formatFile)
                });
            });
            for (let i = 0; i < insights.length; i++) {
                let hashId = xxhash.h32(insights[i].timemoment + insights[i].timeStamp + insights[i].title, 0x00).toString(16);
                insights[i].hashId = hashId;
                trace(hashId, insights[i].title, insights[i].type);
            }
            return resolve(insights);
        });
    });
}

export { crawlInsights }