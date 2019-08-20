let crawlCookies = (options) => {
    return new Promise(resolve => {
        request(options, (error, response, body) => {
            if (error) throw new Error(error);
            resolve();
        });
    });
}

export { crawlCookies }