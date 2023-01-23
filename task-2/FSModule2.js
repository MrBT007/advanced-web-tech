const fs = require('fs') ;
const a = fs.readFileSync('E:\\Advanced Web\\task-2\\file.txt')
console.log(a.toString())
console.log("Finished reading file")