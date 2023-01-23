var fs = require('fs')

console.log('Bhut Tushar - 20BCP023')
fs.rename('file.txt','new_file.txt',function(err){
    if(err) throw err;

    console.log('File Renamed');
})