let logOut = (options) => {
    return new Promise(resolve => {
        request(options, (error, response, body) => {
            return resolve(response.statusCode);
        });
    });
}

export { logOut }