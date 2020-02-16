var url = 'http//<insert-endPoint>/log';

function log(message) {
    //Send an HTTP request
    console.log(message);
}

module.exports.log = log;
//module.exports.endPoint = url;
