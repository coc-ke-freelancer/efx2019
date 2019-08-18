const timestamp = require("mongoose-timestamp");
const { Schema, model } = require('mongoose');

let DataPreviewChema = new Schema({
    timestamp: String,
    timemoment: String,
    data: [{}]
})
DataPreviewChema.plugin(timestamp);
let DataPreviewModel = model('datapreview', DataPreviewChema);
module.exports = DataPreviewModel;