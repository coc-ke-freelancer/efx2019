const timestamp = require("mongoose-timestamp");
const { Schema, model } = require('mongoose');

let NewsSchema = new Schema([{
    month: String,
    day: String,
    time: String,
    type: String,
    title: String,
    timemoment: String,
    timeStamp: String,
    description: String
}]);
NewsSchema.plugin(timestamp);
let NewsModel = model('news', NewsSchema);
module.exports = NewsModel;