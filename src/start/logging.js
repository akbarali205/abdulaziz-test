const winston = require('winston');

module.exports = function () {
    winston.exceptions.handle(new winston.transports.Console());
    process.on('unhandledRejection', (ex) => {
        throw ex;
    })
}