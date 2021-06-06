var fs=require('fs');
//create a new file
fs.writeFileSync("read.txt"," hello every one welcome to node js");
// by use this i can add data in present file it throught mot override over data
fs.appendFileSync("read.txt"," my name is shubham ");

//read data to file 
const buf_data =fs.readFileSync("read.txt",'utf8');
console.log(buf_data);
// reanme the present file 
fs.renameSync("read.txt","readwrite.txt");
//delete the file 
fs.unlinkSync("read.txt");