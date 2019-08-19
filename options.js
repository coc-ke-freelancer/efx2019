
let optionsBoards = {
    method: 'GET',
    url: 'https://plus.efxdata.com/news/options_board',
    headers:
        {
            'postman-token': '36ccb186-1e78-8ab0-ef05-5c05bbd70cb2',
            cookie: '__cfduid=d713325238546bf76e24c95e00703d0de1566042736; _ga=GA1.2.1408687129.1566042739; _gid=GA1.2.2029228213.1566042739; PHPSESSID=6ad6s0eoe13rkae2qmnqsqpah5hcluof',
            'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en;q=0.6,en-US;q=0.5',
            // 'accept-encoding': 'gzip, deflate, br',
            referer: 'https://plus.efxdata.com/login',
            'sec-fetch-site': 'same-origin',
            accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
            'sec-fetch-user': '?1',
            'sec-fetch-mode': 'navigate',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36',
            dnt: '1',
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
            'postman-token': 'fc1e4ba1-6902-6b6f-634c-6af200d80c45',
            cookie: '__cfduid=d713325238546bf76e24c95e00703d0de1566042736; _ga=GA1.2.1408687129.1566042739; _gid=GA1.2.2029228213.1566042739; PHPSESSID=6ad6s0eoe13rkae2qmnqsqpah5hcluof',
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

let optionsDataPreviews = {
    method: 'GET',
    url: 'https://plus.efxdata.com/news/events',
    headers:
        {
            'postman-token': 'de38f1ac-93d6-e0ff-650c-cb0c7f0fdde4',
            cookie: '__cfduid=d713325238546bf76e24c95e00703d0de1566042736; _ga=GA1.2.1408687129.1566042739; _gid=GA1.2.2029228213.1566042739; PHPSESSID=6ad6s0eoe13rkae2qmnqsqpah5hcluof',
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
export { optionsBoards, optionsDataPreviews, optionsInsights }