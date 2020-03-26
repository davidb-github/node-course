
const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

// Register a listener
emitter.on('messageLogged', (e) => {
    console.log('Listener called', e);
});

logger.log('banana');
