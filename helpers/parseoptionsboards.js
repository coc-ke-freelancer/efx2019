const cheerio = require("cheerio");
const moment = require('moment-timezone');
let request = require("request");
const xxhash = require('xxhashjs');
import { fetchImage } from './fetchimage';
const FileCookieStore = require('tough-cookie-filestore');
const j = request.jar(new FileCookieStore('./cookies.json'));
request = request.defaults({ jar: j });

let crawlOptionBoards = (options) => {
    return new Promise(resolve => {
        request(options, (error, response, body) => {

            if (error) throw new Error(error);
            let $ = cheerio.load(body.toString());

            // col1
            let cols1 = $(".t-bank-h-col1");
            let optionboards = [];
            cols1.each((i, d) => {
                let first = $(d).text().trim().split("\n")[0];
                let { groups } = /^(?<month>[A-z]+)(?<day>[0-9]+)$/gmi.exec(first);
                groups.time = $(d).text().trim().split("\t").pop();

                let ymdt = new Date().getFullYear() + "-" + groups.month + "-" + groups.day + " " + groups.time;
                let timeMoment = moment.tz(ymdt, 'YYYY-MMM-DD, hh:mm A', "America/Los_Angeles").format();
                groups.timemoment = timeMoment;
                groups.timestamp = new Date(timeMoment).getTime();
                groups.type = 'optionboard';
                optionboards.push(JSON.parse(JSON.stringify(groups)));
            });

            // col2
            let cols2 = $(".t-bank-h-col2");
            cols2.each((i, d) => {
                optionboards[i].title = $(d).text().trim();
            });

            //col3
            let cols3 = $(".newsBody");
            cols3.each((i, d) => {
                optionboards[i].description = $(d).attr("data-body");
                let $$ = cheerio.load(optionboards[i].description);
                $$("img").each(async (i2, d2) => {
                    let url = $$(d2).attr("src");
                    optionboards[i].description = optionboards[i].description.replace(url, '__0x01__');
                    url = url.substring(0, url.indexOf('?'));

                    let formatFile = url.split('.').pop();
                    let hashUrl = xxhash.h32(url, 0x001).toString(16);
                    optionboards[i].description = optionboards[i].description.replace(
                        '__0x01__',
                        `https://api-efx.caybua.com/images/${hashUrl}.${formatFile}`
                    );


                    await fetchImage('https://' + options.headers.authority + url, './images/' + hashUrl + '.' + formatFile)
                });
            });

            for (let i = 0; i < optionboards.length; i++) {
                let hashId = xxhash.h32(optionboards[i].timemoment + optionboards[i].timeStamp + optionboards[i].title, 0x00).toString(16);
                optionboards[i].hashId = hashId;
                trace(hashId, optionboards[i].title, optionboards[i].type);
            }
            return resolve(optionboards);
        });
    })

}
export { crawlOptionBoards }