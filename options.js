let optionsCookies = {
    method: 'POST',
    url: 'https://plus.efxdata.com/login_check',
    headers:
    {
        Connection: 'keep-alive',
        'accept-language': 'en-US,en;q=0.9',
        referer: 'https://plus.efxdata.com/login,https://plus.efxdata.com/login_check',
        'sec-fetch-site': 'same-origin',
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
        'sec-fetch-user': '?1',
        'sec-fetch-mode': 'navigate',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36',
        'content-type': 'application/x-www-form-urlencoded',
        'upgrade-insecure-requests': '1',
        origin: 'https://plus.efxdata.com',
        'cache-control': 'max-age=0,no-cache',
        authority: 'plus.efxdata.com'
    },
    form:
    {
        _username: 'huydn2010@gmail.com',
        _password: 'TraderViet13579',
        swidth: '1198',
        sheight: '843'
    }
}

let optionsBoards = {
    method: 'GET',
    url: 'https://plus.efxdata.com/news/options_board',
    headers:
    {
        'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en;q=0.6,en-US;q=0.5',
        referer: 'https://plus.efxdata.com/news/options_board',
        'sec-fetch-site': 'same-origin',
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
        'sec-fetch-user': '?1',
        'sec-fetch-mode': 'navigate',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36',
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
        'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en;q=0.6,en-US;q=0.5',
        referer: 'https://plus.efxdata.com/news/insights',
        'sec-fetch-site': 'none',
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
        dnt: '1',
        'sec-fetch-user': '?1',
        'sec-fetch-mode': 'navigate',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36',
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
        'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en;q=0.6,en-US;q=0.5',
        referer: 'https://plus.efxdata.com/news/events',
        'sec-fetch-site': 'none',
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
        dnt: '1',
        'sec-fetch-user': '?1',
        'sec-fetch-mode': 'navigate',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36',
        'upgrade-insecure-requests': '1',
        'cache-control': 'no-cache',
        pragma: 'no-cache',
        authority: 'plus.efxdata.com'
    }
};

let optionsLogOut = {
    method: 'GET',
    url: 'https://plus.efxdata.com/logout',
    headers:
    {
        'cache-control': 'no-cache',
        Connection: 'keep-alive',
        'Cache-Control': 'no-cache',
        cookie: '__cfduid=d4d72385d8a4025ba8461d8cfae969e041566313773; _ga=GA1.2.1187409732.1566313776; _gid=GA1.2.1594770384.1567532134; _gat_gtag_UA_22089113_2=1; PHPSESSID=03kuova9fp5d53bf1i0pjrne0c40suqv',
        'accept-language': 'en-US,en;q=0.9,vi;q=0.8',
        referer: 'https://plus.efxdata.com/,https://plus.efxdata.com/logout',
        'sec-fetch-site': 'same-origin',
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
        'sec-fetch-user': '?1',
        'sec-fetch-mode': 'navigate',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36',
        'upgrade-insecure-requests': '1',
        authority: 'plus.efxdata.com'
    }
}
export { optionsBoards, optionsDataPreviews, optionsInsights, optionsCookies, optionsLogOut }