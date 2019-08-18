const cheerio = require("cheerio");
const fs = require('fs');
const moment = require('moment-timezone');
let OptionsBoardModel = require('./models/optionsboard');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/traderviet');
let parseFile = fs.readFileSync('index.html').toString();

let $ = cheerio.load(parseFile);

let cols1 = $(".t-bank-h-col1");

let contents = []

cols1.each((i, d) => {
    let regex = new RegExp(/^(?<month>[A-z]+)(?<day>[0-9]+)$/gmi);
    let first = $(d).text().trim().split("\n")[0]
    let { groups } = regex.exec(first);
    groups.time = $(d).text().trim().split("\t").pop();
    contents.push(JSON.parse(JSON.stringify(groups)));
})


let cols2 = $(".t-bank-h-col2");

cols2.each((i, d) => {
    contents[i].title = $(d).text().trim()
})

let cols3 = $(".newsBody");

cols3.each((i, d) => {
    contents[i].description = $(d).attr("data-body")
})

let sanbox = $('img').attr('src');
// console.log(sanbox);

// sanbox.each((i, d) => {
//     console.log(i, $(d).html());
// })


let timeMoment = moment.tz(contents.day + "/" + contents.month + "/" + new Date().getFullYear() + contents.time, "mmm/D/YYYY h:mm a", "America/Los_Angeles");
let timeStamp = timeMoment.format();
timeStamp = new Date(timeStamp).getTime();
// contents.timestamp = JSON.stringify(timeStamp);
// contents.timemoment = timeMoment.format();
let obj = {
    timestamp: JSON.stringify(timeStamp),
    timemoment: timeMoment.format(),
    data: contents
}
const content = new OptionsBoardModel(obj);
content.save((err, docs) => {
    console.log(err);
});