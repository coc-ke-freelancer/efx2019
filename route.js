const Router = require("express").Router
const { resolve } = require('path')

let router = Router()

let NewsModel = require('./models/news');

router.get("/9c6e279e1c824648a86b0495411ab20f/news/:type/:sortBy", async (req, res) => {
    let { type, sortBy } = req.params;
    NewsModel.find({ type: type, })
});

module.exports = router