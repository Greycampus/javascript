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
fs.readFile('text1.txt',(err,data) =>{
  if(err) throw err;
  k = String(data).split('\n');
  //getting line number
  rl.question('enter the line number:', (answer) => {
  //cheking if file line count greter than or equal to line number
  if(k.length>=answer){
    console.log(`${answer}th line: ${k[answer-1]}`);}
  else{
    console.log('no data');
  }
  rl.close();
});
});
