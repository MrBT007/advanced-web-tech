const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter() ;

myEmitter.on('WaterFull',()=>{
    console.log('Please turn off the mototr!');
    setTimeout(()=>{
        console.log('Please turn off the motor! Its a gentle reminder');
    },3000);
});

console.log("The script is running");
console.log("The script is still running");
console.log("Roll No : 20BCP023")

myEmitter.emit('WaterFull');