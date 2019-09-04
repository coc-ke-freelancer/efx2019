let logOut = (options) => {
    return new Promise(resolve => {
        request(options, (error, response, body) => {
            debug('Logout: ' + response.statusCode);
            return resolve(response.statusCode);
        });
    });
}

export { logOut }