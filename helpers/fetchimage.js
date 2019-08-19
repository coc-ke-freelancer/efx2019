const fs = require('fs');
const request = require('request');

let fetchImage = (uri, filename, callback) => {
    console.log("im in fetch Image");

    request.head(uri, (err, res, body) => {
        request(uri).pipe(fs.createWriteStream(filename)).on('error', callback);
    });
};

// fetchImage('https://plus.efxdata.com/news/dccad22e84c78cead226cf3c02aa50c4/image_1565559784_0.png_0.png',
//     '../image/a.png', () => { });

export { fetchImage }