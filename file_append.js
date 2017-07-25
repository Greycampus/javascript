/*
JavaScript program to append two files
Ouput
appended file data:
Hello programmer! you have successfully open text file
hello Ruby programmer
hello C programmer
hello C++ programmer
hello python programmer
hello buddy
*/
//install concat-files package using 'npm install concat-files'
const concat = require('concat-files');
const fs = require('fs');
concat(['text.txt','text1.txt'],'text2.txt',(err) => {
  if(err) throw err;  
  fs.readFile('text2.txt',(err,data) =>{
    if(err) throw err;
    console.log(`appended file data:\n${String(data)}`);
  });

});
