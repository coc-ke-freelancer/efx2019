const cheerio = require("cheerio");
const moment = require('moment-timezone');
const request = require("request");

let crawlDataPreview = (options) => {
    request(options, function (error, response, body) {

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
            groups.timeStamp = new Date(timeMoment).getTime();
            groups.type = 'datapreview';
            datapreviews.push(JSON.parse(JSON.stringify(groups)));
        });

        // descrition
        let descrition = $(".newsBody");
        descrition.each((i, d) => {
            datapreviews[i].description = $(d).attr("data-body");
        });
        console.log(datapreviews);
    });
}
let optionsDataPreview = {
    method: 'GET',
    url: 'https://plus.efxdata.com/news/events',
    headers:
    {
        'postman-token': 'd2059b83-621b-ffb1-a7a5-cd8d385b4930',
        cookie: '__cfduid=d713325238546bf76e24c95e00703d0de1566042736; _ga=GA1.2.1408687129.1566042739; _gid=GA1.2.2029228213.1566042739; PHPSESSID=nr2viam18mjr4rnaves60tn3uu5hct1b; _gat_gtag_UA_22089113_2=1',
        'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en;q=0.6,en-US;q=0.5',
        // 'accept-encoding': 'gzip, deflate, br',
        referer: 'https://plus.efxdata.com/news/events',
        'sec-fetch-site': 'none',
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
        dnt: '1',
        'sec-fetch-user': '?1',
        'sec-fetch-mode': 'navigate',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36',
        'upgrade-insecure-requests': '1',
        'cache-control': 'no-cache',
        pragma: 'no-cache',
        authority: 'plus.efxdata.com'
    }
};

crawlDataPreview(optionsDataPreview)

// export { crawlInsights }