let request = require("request");

const FileCookieStore = require('tough-cookie-filestore');
const j = request.jar(new FileCookieStore('../cookies.json'));
request = request.defaults({ jar: j });

let crawlCookies = (options) => {
    request(options, (error, response, body) => {
        if (error) throw new Error(error);
    });
}

let options = {
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
// crawlCookies(options);
export { crawlCookies }