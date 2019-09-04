let crawlCookies = (options) => {
    return new Promise(resolve => {
        request(options, (error, response, body) => {
            trace(response.headers, body);
            if (error) throw new Error(error);
            resolve();
        });
    });
}

export { crawlCookies }