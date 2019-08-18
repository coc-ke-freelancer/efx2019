const cheerio = require("cheerio");
const moment = require('moment-timezone');
const request = require("request");

let crawlData = (options) => {
    return new Promise(resolve => {
        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            let $ = cheerio.load(body.toString());
            // col1
            let cols1 = $(".t-bank-h-col1");
            let contents = []
            cols1.each((i, d) => {
                let regex = new RegExp(/^(?<month>[A-z]+)(?<day>[0-9]+)$/gmi);
                let first = $(d).text().trim().split("\n")[0]
                let { groups } = regex.exec(first);
                groups.time = $(d).text().trim().split("\t").pop();
                contents.push(JSON.parse(JSON.stringify(groups)));
            })
            // col2
            let cols2 = $(".t-bank-h-col2");
            cols2.each((i, d) => {
                contents[i].title = $(d).text().trim()
            })
            //col3
            let cols3 = $(".newsBody");
            cols3.each((i, d) => {
                contents[i].description = $(d).attr("data-body")
            })
            // get and save image
            let sanbox = $('img').attr('src');
            // console.log(sanbox);

            // sanbox.each((i, d) => {
            //     console.log(i, $(d).html());
            // })

            let timeMoment = moment.tz(contents.day + "/" + contents.month + "/" + new Date().getFullYear() + contents.time, "mmm/D/YYYY h:mm a", "America/Los_Angeles");
            let timeStamp = timeMoment.format();
            timeStamp = new Date(timeStamp).getTime();
            let obj = {
                timestamp: JSON.stringify(timeStamp),
                timemoment: timeMoment.format(),
                data: contents
            }
            return resolve(obj);
        });
    })

}
export { crawlData }