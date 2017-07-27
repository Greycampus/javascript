/*
program to open a csv file and print only the second column in the file
Output
the data in second column is :
2
two
dho
rendu
*/
//install csvtojson module using 'npm install csvtojson'
//import csvtojson module
const csv = require('csvtojson');
csv({noheader:false}).fromFile('cc.csv').on('json',(jsonObj)=>{
  //accessing 'second' column from file
  console.log(jsonObj['second']);
})
