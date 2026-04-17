let fs = require('fs');
let path = require('path');

let filePath = path.join(__dirname, 'example.txt');
console.log(filePath);

fs.readFile(filePath,'utf8',(err,data)=> {
    if (err) throw err;
    console.log(data);  
})


// a local module, and
let mathUtil = require('./mathUtil.js');
console.log(mathUtil.sum(34,45));
// a third-party module.
let nums = [34, 23, 56, 22, 57];
let lodash = require('lodash');
let sorted = lodash.sortBy(nums);
console.log(nums);
console.log(sorted);