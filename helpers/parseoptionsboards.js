const cheerio = require("cheerio");
const moment = require('moment-timezone');
const request = require("request");

let crawlOptionBoards = (options) => {
    return new Promise(resolve => {
        request(options, function (error, response, body) {

            if (error) throw new Error(error);
            let $ = cheerio.load(body.toString());

            // col1
            let cols1 = $(".t-bank-h-col1");
            let contents = [];
            cols1.each((i, d) => {
                let first = $(d).text().trim().split("\n")[0];
                let { groups } = /^(?<month>[A-z]+)(?<day>[0-9]+)$/gmi.exec(first);
                groups.time = $(d).text().trim().split("\t").pop();

                let ymdt = new Date().getFullYear() + "-" + groups.month + "-" + groups.day + " " + groups.time;
                let timeMoment = moment.tz(ymdt, 'YYYY-MMM-DD, hh:mm A', "America/Los_Angeles").format();
                groups.timemoment = timeMoment;
                groups.timeStamp = new Date(timeMoment).getTime();
                groups.type = 'optionboard';
                contents.push(JSON.parse(JSON.stringify(groups)));
            })

            // col2
            let cols2 = $(".t-bank-h-col2");
            cols2.each((i, d) => {
                contents[i].title = $(d).text().trim();
            })

            //col3
            let cols3 = $(".newsBody");
            cols3.each((i, d) => {
                contents[i].description = $(d).attr("data-body");
            })

            // get and save image
            let sanbox = $('img').attr('src');
            // console.log(sanbox);

            // sanbox.each((i, d) => {
            //     console.log(i, $(d).html());
            // })

            return resolve(contents);
        });
    })

}
// let a = async () => {
//     let options = {
//         method: 'GET',
//         url: 'https://plus.efxdata.com/news/options_board',
//         headers:
//         {
//             'postman-token': 'b81c239b-d3c5-4ff4-3aec-0e268fdad91a',
//             cookie: '__cfduid=d713325238546bf76e24c95e00703d0de1566042736; _ga=GA1.2.1408687129.1566042739; _gid=GA1.2.2029228213.1566042739; PHPSESSID=nr2viam18mjr4rnaves60tn3uu5hct1b',
//             'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en;q=0.6,en-US;q=0.5',
//             // 'accept-encoding': 'gzip, deflate, br',
//             referer: 'https://plus.efxdata.com/login',
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
//     let dmm = await crawlData(options);
//     console.log(dmm);
// }
// a();
export { crawlOptionBoards }