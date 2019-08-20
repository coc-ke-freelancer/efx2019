let request = require("request");

const FileCookieStore = require('tough-cookie-filestore');
const j = request.jar(new FileCookieStore('./cookies.json'));
request = request.defaults({ jar: j });

let crawlCookies = (options) => {
    return new Promise(resolve => {
        request(options, (error, response, body) => {
            if (error) throw new Error(error);
            resolve();
        });
    });
}

export { crawlCookies }