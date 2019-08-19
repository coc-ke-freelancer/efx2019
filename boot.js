const { existsSync, mkdirSync, writeFileSync } = require("fs");
const { resolve } = require("path");

const bootstrap = () => {
    let dir = {
        image: resolve(".", "image")
    }
    for (const key in dir) {
        if (!existsSync(dir[key])) mkdirSync(dir[key]);
    }
    let max = existsSync("./max");
    if (!max) writeFileSync('./max', '56163');
}

bootstrap();