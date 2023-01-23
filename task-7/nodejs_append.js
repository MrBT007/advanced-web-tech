var fs = require('fs')

console.log("Bhut Tushar - 20BCP023")
// fs.appendFile('file.txt','This is G1 [11 Jan 2023]\n',function(err){
//     if(err)
//     {
//         throw err;
//     }
//     console.log('File Created')
// })

// fs.open('file.txt','w',function(err){
//     if(err)
//     {
//         throw err;
//     }
//     console.log('Saved')
// })

fs.writeFile('file2.txt','This is another file', function(err){
    if(err) throw err;
    console.log("Replaced")
})

