const timestamp = require("mongoose-timestamp");
const { Schema, model } = require('mongoose');

let InsightsSchema = new Schema({
    timestamp: String,
    timemoment: String,
    data: [{}]
})
InsightsSchema.plugin(timestamp);
let InsightsModel = model('insights', InsightsSchema);
module.exports = InsightsModel;