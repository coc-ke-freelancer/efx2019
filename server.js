#!/usr/bin/node

if (!process.env.DEBUG) process.env.DEBUG = "EFX*"

global.debug = require("debug")("EFX::DEBUG » ")
global.trace = require("debug")("EFX::TRACE » ")
const express = require("express")
const bodyParser = require("body-parser")
const { connect } = require("mongoose")
const favicon = require('serve-favicon')
const { resolve } = require("path");
const { router } = require("./route");

let ENV = {
    port: process.env.EFX_PORT || 3011,
    mongo_host: process.env.EFX_MONGO_URI || 'mongodb://localhost:27017/traderviet'
}

let app = express()

app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
app.use(bodyParser.text({ type: 'text/html' }))
app.use(favicon(resolve('.', 'favicon.ico')))

trace(ENV)

app.use(router)

trace("Add [UPLOAD] router")

app.listen(ENV.port, () => {
    debug(`SERVER IS START LOCALHOST:${ENV.port}`)
    debug(`Connect Database ${ENV.mongo_host}`)
    connect(ENV.mongo_host, { useNewUrlParser: true }, (e) => {
        if (e) { debug("ERROR CONNECT DATABASE ", e); return; }
        debug("CONNECTED DATABASE !!!");
        require("./boot");
        // require("./schedule");
        debug("RUN SCHEDULER");
    });
})
