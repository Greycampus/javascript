/*
JavaScript program to open a text file and print the nth line in text file if nth line does not exist print 'no data'
Input
enter the line number:
4
Ouput
4th line:hello python programmer

*/
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const fs = require('fs');
fs.readFile('text.txt',(err,data) =>{
  if(err) throw err;
  k = data.split('\n');
  rl.question('enter the line number:', (answer) => {
  
  rl.close();
});
});
