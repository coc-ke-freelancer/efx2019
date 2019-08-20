const Router = require("express").Router
const { resolve } = require('path')
var WPAPI = require('wpapi');
var wp = new WPAPI({
    endpoint: 'https://vnfx.net/wp-json',
    username: 'admin',
    password: 'dxYZeKvqKK9qmjce'
});

let router = Router()

let NewsModel = require('./models/news');

router.get("/9c6e279e1c824648a86b0495411ab20f/news/:type/:sortBy/:limit", async (req, res) => {
    let { type, sortBy, limit } = req.params;
    let sortObj = {};
    if (sortBy === "timeStamp") sortObj[sortBy] = -1;
    else sortObj.createdAt = -1;
    let where = {};
    if (type !== "all") where.type = type;
    let list = await NewsModel.find(where).sort(sortObj).limit(parseInt(limit));
    return res.send(list);
});

router.get("/images/:image", async (req, res) => {
    const { image } = req.params;
    return res.sendFile(require("path").resolve(".", `./images/${image}`));
});


router.post("/9c6e279e1c824648a86b0495411ab20f/push/to/wp/:id", async (req, res) => {
    let post = await NewsModel.findById(req.params.id);
    console.log(post);
    wp.posts().create({
        title: post.title,
        content: post.description,
        status: 'draft',
        author: 1
    }).then(console.log).catch(console.log);
    res.send({});
})

export { router }