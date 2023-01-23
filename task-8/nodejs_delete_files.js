var fs = require('fs')

console.log('Bhut Tushar - 20BCP023')
fs.unlink('file.txt',function(err){
    if(err)throw err;
    console.log('File Deleted');
})