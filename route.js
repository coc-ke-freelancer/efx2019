const Router = require("express").Router
const { resolve } = require('path')

let router = Router()

let NewsModel = require('./models/news');

router.get("/9c6e279e1c824648a86b0495411ab20f/news/:type/:sortBy/:limit", async (req, res) => {
    let { type, sortBy, limit } = req.params;
    let sortObj = {};
    if (sortBy === "timeStamp") sortObj[sortBy] = -1;
    else sortObj.createdAt = -1;
    let list = await NewsModel.find({ type: type }).sort(sortObj).limit(parseInt(limit));
    return res.send(list);
});


export { router }