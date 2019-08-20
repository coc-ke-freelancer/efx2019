#!/usr/bin/node

if (!process.env.DEBUG) process.env.DEBUG = "PFMT*"

global.debug = require("debug")("PFMT » ")
global.trace = require("debug")("TRACE::PFMT » ")
const express = require("express")
const bodyParser = require("body-parser")
const { connect } = require("mongoose")
const favicon = require('serve-favicon')
const { resolve } = require("path");

let ENV = {
    port: process.env.PFMT_PORT || 3000,
    mongo_host: process.env.PFMT_MONGO_URI || 'mongodb://localhost:27017/traderviet'
}

let app = express()

app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
app.use(bodyParser.text({ type: 'text/html' }))
app.use(favicon(resolve('.', 'favicon.ico')))


trace(ENV)

app.use(require("./route"))
trace("Add [UPLOAD] router")

app.listen(ENV.port, () => {
    debug(`SERVER IS START LOCALHOST:${ENV.port}`)
    debug(`Connect Database ${ENV.mongo_host}`)
    connect(ENV.mongo_host, { useNewUrlParser: true }, (e) => {
        if (e) { debug("ERROR CONNECT DATABASE ", e); return; }
        debug("CONNECTED DATABASE !!!");
        require("./boot");
        require("./schedule");
        debug("RUN SCHEDULER");
    });
})
