console.log("Bhut Tushar 20BCP023\n\n");
var fs = require('fs')
var numArray = [];

var fromnum = 1
var tonum = 10
for (let index = fromnum; index <= tonum; index++) {
    numArray.push(index)
    
}
var randomNums = [];

for (let index = 0; index < 9; index++) {
    while(numArray.length > 0){
        var randomNum = Math.floor(Math.random() * numArray.length);
        randomNums.push(numArray[randomNum]);
        numArray.splice(randomNum, 1);
    }

    fs.appendFile('randomNums.txt',randomNums.toString()+"\n",function(err){
    if(err)
    {
        throw err;
    }
})
    // console.log(randomNums);
    numArray = randomNums;
    randomNums = [];
}