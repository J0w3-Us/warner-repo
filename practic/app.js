const EventEmitter = require('events');

// instancia de eventos
const myEvent = new EventEmitter();

// saludo
myEvent.on('saludos', (nombre) => {
    console.log(`¡hola, ${nombre}`);
});

// emisión del evento
myEvent.emit('saludos', 'joe');