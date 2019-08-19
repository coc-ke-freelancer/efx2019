import { resolve } from 'path';

const fs = require('fs');
const request = require('request');
const debug = require('debug');

let fetchImage = (uri, filename, callback) => {
    request.head(uri, (err, res, body) => {
        if (!fs.existsSync(filename)) {
            request(uri).pipe(fs.createWriteStream(filename)).on('error', callback);
        } else {
            debug('File is exists!!!!!!!');
        }

    });
};

export { fetchImage }