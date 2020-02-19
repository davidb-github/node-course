const EventEmitter = require('events');
const emitter = new EventEmitter();

var url = 'http//<insert-endPoint>/log';

function log(message) {
//Send an HTTP request
console.log(message);

// Raise an event
emitter.emit('messageLogged', {id: 1, message: 'Orange'});

}

module.exports = log;