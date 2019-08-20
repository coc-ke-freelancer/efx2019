let cookie = '__cfduid=d5d66d4806177edc26d9ebcd3e72de7d51566008815; _ga=GA1.2.934799134.1566008816; _gid=GA1.2.9403935.1566233720; _gat_gtag_UA_22089113_2=1; PHPSESSID=bjdrah4m6dhnsk3b7taa3qhn1a0rf1gs';

let optionsCookies = {
    method: 'GET',
    url: 'https://plus.efxdata.com/login_check',
    headers:
    {
        Connection: 'keep-alive',
        // cookie: '__cfduid=d4d72385d8a4025ba8461d8cfae969e041566313773; _ga=GA1.2.1187409732.1566313776; _gid=GA1.2.86600268.1566313776; loginMesg=Your%20session%20has%20ended.%20Your%20credentials%20have%20been%20used%20to%20log%20on%20using%20another%20browser%20or%20device.; PHPSESSID=jc0qkpvtdckvkqte0hiot4ljt6kgi137; _gat_gtag_UA_22089113_2=1,__cfduid=d4d72385d8a4025ba8461d8cfae969e041566313773; _ga=GA1.2.1187409732.1566313776; _gid=GA1.2.86600268.1566313776; loginMesg=Your%20session%20has%20ended.%20Your%20credentials%20have%20been%20used%20to%20log%20on%20using%20another%20browser%20or%20device.; PHPSESSID=jc0qkpvtdckvkqte0hiot4ljt6kgi137; _gat_gtag_UA_22089113_2=1; PHPSESSID=hongmqi8sgbmemps71e9bmgpjnseemgh',
        'accept-language': 'en-US,en;q=0.9',
        // 'accept-encoding': 'gzip, deflate, br',
        referer: 'https://plus.efxdata.com/login,https://plus.efxdata.com/login_check',
        'sec-fetch-site': 'same-origin',
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
        'sec-fetch-user': '?1',
        'sec-fetch-mode': 'navigate',
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36',
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
        swidth: '1077',
        sheight: '927'
    }
}

let optionsBoards = {
    method: 'GET',
    url: 'https://plus.efxdata.com/news/options_board',
    headers:
    {
        'postman-token': '36ccb186-1e78-8ab0-ef05-5c05bbd70cb2',
        cookie: cookie,
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
        cookie: cookie,
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
        cookie: cookie,
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
export { optionsBoards, optionsDataPreviews, optionsInsights, optionsCookies }