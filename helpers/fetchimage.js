import { resolve } from 'path';

const fs = require('fs');
const debug = require('debug');

let fetchImage = (uri, filename) => {
    return new Promise(resolve => {
        request.head(uri, (err, res, body) => {
            request(uri).pipe(fs.createWriteStream(filename));
            setTimeout(resolve, 200);
        });
    });
};

export { fetchImage }