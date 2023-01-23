const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) => {
  setImmediate(() => {
    console.log('Please Turn off the motor');
    console.log("Go to floor : "+a);
    console.log("Switch Off switch No : "+b);
  });
});
console.log("Roll No : 20BCP023")
myEmitter.emit('event', '2', '7');
