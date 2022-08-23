const fs = require('fs');
function done(err, buffer){
    if(err){
        console.log(err);
    }
    else{
        console.log(buffer.toString());
    }
}
console.log("Going to read a file...");
fs.readFile("/Users/amitsrivastava/Documents/mern-msit/node-codes/one.js", done); // Async 
console.log("Going to read a file... Now do Calc");
var a= 10;
var b = 20;
var c = a + b;
console.log(c);
