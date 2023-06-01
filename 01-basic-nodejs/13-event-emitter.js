const EventEmitter = require('events');

const myEvent = new EventEmitter();

myEvent.on('response', (name, id) => {
    console.log(`data received to ${name} with id ${id}`);
});
myEvent.on('response', () => {
    console.log('another logic data received');
});

myEvent.emit('response','afiq',443);