const EventEmitter = require('events');

var url = 'http://<endPoint>';

class Logger extends EventEmitter {
  log(message) {
    //Send an HTTP request
    console.log(message);
        
    // Raise an event
    this.emit('messageLogged', {id: 1, message: 'http://<endPoint>'});       
}
}

module.exports = Logger;