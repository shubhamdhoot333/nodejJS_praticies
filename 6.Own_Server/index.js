const http=require("http");
http.createServer((req,res) => {
    res.writeHead(200,{'content-type':'text/html'});
    res.end("this is my server ");
}).listen(8000);
