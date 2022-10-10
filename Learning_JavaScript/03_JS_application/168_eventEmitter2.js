const Emitter = require('events');
const eventConfig = require('./168_config').events;
const em = new Emitter();

em.on(eventConfig.GREET, () => {
    console.log('Somewhere, someone said heelo');
});

em.on(eventConfig.GREET, () => {
    console.log('A Greeting occured');
});

em.emit(eventConfig.GREET);