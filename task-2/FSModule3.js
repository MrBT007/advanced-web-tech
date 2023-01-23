const fs = require('fs');

fs.writeFile('file1.txt',"This is 1st file",() => {console.log("Written")});
console.log("Finished writing file1");

const b = fs.writeFileSync('file2.txt',"This is 2nd file");
console.log(b);
console.log("Finished writing file2");