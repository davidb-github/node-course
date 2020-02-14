var = url = 'http//mylogger.ioggg/log';

function log(message) {
    //Send an HTTP request
    console.log(message);
}

module.exports.log = log;
module.exports.endPoint = url;