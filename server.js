import { crawlOptionBoards } from "./helpers/parseoptionsboards";
import { crawlInsights } from './helpers/parseinsights';
import { crawlDataPreview } from './helpers/parsedatapreview';

require('./boot');
let NewsModel = require('./models/news');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/traderviet');

let getData = async () => {
    let optionsBoards = {
        method: 'GET',
        url: 'https://plus.efxdata.com/news/options_board',
        headers:
            {
                'postman-token': 'aafcc16b-d93d-cf98-7f2a-f3e06fde3215',
                cookie: '__cfduid=d713325238546bf76e24c95e00703d0de1566042736; _ga=GA1.2.1408687129.1566042739; _gid=GA1.2.2029228213.1566042739; PHPSESSID=j0qaab7ogo919t23jvje8148s3biljnd; _gat_gtag_UA_22089113_2=1',
                'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en;q=0.6,en-US;q=0.5',
                // 'accept-encoding': 'gzip, deflate, br',
                referer: 'https://plus.efxdata.com/news/events',
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

    let optionsInsights = {
        method: 'GET',
        url: 'https://plus.efxdata.com/news/insights',
        headers:
            {
                'postman-token': 'dd27f530-8d47-b761-fb4f-7de98de81d8b',
                cookie: '__cfduid=d713325238546bf76e24c95e00703d0de1566042736; _ga=GA1.2.1408687129.1566042739; _gid=GA1.2.2029228213.1566042739; PHPSESSID=nr2viam18mjr4rnaves60tn3uu5hct1b',
                'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en;q=0.6,en-US;q=0.5',
                // 'accept-encoding': 'gzip, deflate, br',
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

    let optionsDataPreviews = {
        method: 'GET',
        url: 'https://plus.efxdata.com/news/events',
        headers:
            {
                'postman-token': 'ba1f7781-9de6-83fc-b55f-94d5be12c12a',
                cookie: '__cfduid=d713325238546bf76e24c95e00703d0de1566042736; _ga=GA1.2.1408687129.1566042739; _gid=GA1.2.2029228213.1566042739; PHPSESSID=j0qaab7ogo919t23jvje8148s3biljnd; _gat_gtag_UA_22089113_2=1',
                'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en;q=0.6,en-US;q=0.5',
                // 'accept-encoding': 'gzip, deflate, br',
                referer: 'https://plus.efxdata.com/news/insights',
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
    // let a = await crawlOptionBoards(optionsBoards);
    // let a = await crawlInsights(optionsInsights);
    // await NewsModel.create(a);
    // console.log(News);
    // console.log(a);
    // await crawlDataPreview(optionsDataPreviews);
    await crawlOptionBoards(optionsBoards);
}
getData();