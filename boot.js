const { existsSync, mkdirSync, writeFileSync } = require("fs");
const { resolve } = require("path");

const bootstrap = () => {
    let dir = {
        image: resolve(".", "images")
    }
    for (const key in dir) {
        if (!existsSync(dir[key])) mkdirSync(dir[key]);
    }
}
bootstrap();

require('./schedule');