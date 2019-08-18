const request = require("request");
const fs = require('fs');
import { crawlData } from "./helpers/parseoptionsboards"

let getData = async () => {
    let options = {
        method: 'GET',
        url: 'https://plus.efxdata.com/news/options_board',
        headers:
        {
            'postman-token': '0ff2aa29-f485-e7a1-39be-002dda6b2069',
            cookie: '__cfduid=d713325238546bf76e24c95e00703d0de1566042736; _ga=GA1.2.1408687129.1566042739; _gid=GA1.2.2029228213.1566042739; _gat_gtag_UA_22089113_2=1; PHPSESSID=nr2viam18mjr4rnaves60tn3uu5hct1b',
            'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en;q=0.6,en-US;q=0.5',
            // 'accept-encoding': 'gzip, deflate, br',
            referer: 'https://plus.efxdata.com/login',
            'sec-fetch-site': 'none',
            accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
            dnt: '1',
            'sec-fetch-user': '?1',
            'sec-fetch-mode': 'navigate',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36',
            'upgrade-insecure-requests': '1',
            'cache-control': 'no-cache',
            pragma: 'no-cache',
            authority: 'plus.efxdata.com'
        }
    };
    let a = await crawlData(options);
    console.log(a);
}
getData();