var fs=require('fs');
//create a new file
fs.writeFileSync("read.txt","welcome to node js");
//this time it overrode the before present content in read.txt 

fs.writeFileSync("read.txt"," heelo every one welcome to node js");
// by use this i can add data in present file it throught mot override over data
fs.appendFileSync("read.txt","my name is shubham ");

//read data to file 
const buf_data =fs.readFileSync("read.txt");
org_data = buf_data.toString();
console.log(org_data);
// reanme the present file 
fs.renameSync("read.txt","readwrite.txt");