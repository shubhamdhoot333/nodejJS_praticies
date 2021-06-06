var fs=require('fs');
//create a new file and callback (when we pass a function as a argument are know as callback )
fs.writeFile("read.txt"," hello every one welcome to node js",function (err){
    console.log("file is created");
    console.log(err);
});


// by use this i can add data in present file it throught mot override over data
fs.appendFile("read.txt"," my name is shubham ",function (err){
    console.log("file in data append ");
    console.log(err);
});

//read data to file 
fs.readFile("read.txt","UTF-8",function(err,data){
    console.log(data);
    console.log(err);
});
/*
// reanme the present file 
fs.renameSync("read.txt","readwrite.txt");
//delete the file 
fs.unlinkSync("read.txt");
*/