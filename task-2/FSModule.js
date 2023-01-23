const fs = require('fs') ;
fs.readFile('E:\\Advanced Web\\task-2\\file.txt','utf8',(err, data)=>{
    console.log(err, data)
})
console.log("Finished reading file")