const timestamp = require("mongoose-timestamp");
const { Schema, model } = require('mongoose');

let OptionsBoardSchema = new Schema({
    timestamp: String,
    timemoment: String,
    data: [{}]
})
OptionsBoardSchema.plugin(timestamp);
let OptionsBoardModel = model('optionboard', OptionsBoardSchema);
module.exports = OptionsBoardModel;