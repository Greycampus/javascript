/*
JavaScript program to Open a text file and print all the data in it.
Ouput
Hello programmer! you have successfully open text file
*/
const fs = require('fs');
fs.readFile('text.txt',(err,data) =>{
  if(err) throw err;
  console.log(String(data));
});
