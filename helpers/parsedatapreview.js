const cheerio = require("cheerio");
const moment = require('moment-timezone');
const xxhash = require('xxhashjs');
import { fetchImage } from './fetchimage';

let crawlDataPreview = (options) => {
    return new Promise(resolve => {
        request(options, (error, response, body) => {
            require("fs").writeFileSync("preview.html", body.toString());

            if (error) throw new Error(error);
            let $ = cheerio.load(body.toString());
            let datapreviews = [];

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
                groups.type = 'datapreview';
                datapreviews.push(JSON.parse(JSON.stringify(groups)));
            });

            // descrition
            let descrition = $(".newsBody");
            descrition.each((i, d) => {
                datapreviews[i].description = $(d).attr("data-body");
                let $$ = cheerio.load(datapreviews[i].description);
                datapreviews[i].imgs = [];
                $$("img").each(async (i2, d2) => {
                    let url = $$(d2).attr("src");
                    datapreviews[i].description = datapreviews[i].description.replace(url, '__0x01__');
                    url = url.substring(0, url.indexOf('?'));

                    let formatFile = url.split('.').pop();
                    let hashUrl = xxhash.h32(url, 0x001).toString(16);
                    datapreviews[i].description = datapreviews[i].description.replace(
                        '__0x01__',
                        `https://api-efx.caybua.com/images/${hashUrl}.${formatFile}`
                    );

                    await fetchImage('https://' + options.headers.authority + url, './images/' + hashUrl + '.' + formatFile)
                });
                // trace(datapreviews[i]);
            });
            for (let i = 0; i < datapreviews.length; i++) {
                let hashId = xxhash.h32(datapreviews[i].timemoment + datapreviews[i].timeStamp + datapreviews[i].title, 0x00).toString(16);
                datapreviews[i].hashId = hashId;
                trace(hashId, datapreviews[i].title, datapreviews[i].type);
            }
            return resolve(datapreviews);
        });
    });
}

export { crawlDataPreview }