const http=require("http");
const url=require("url");
http.createServer((req,res) => {
    res.writeHead(200,{'content-type':'text/html'});
    
    if(req.url=="/"){
    res.end("this is my home page  ");
    }else if(req.url=="/about"){
        res.end("this is my about page ");
    }
    else if(req.url=="/content"){
        res.end("this is my content page ");
    }
    else{
        res.writeHead(404,{'content-type':'text/html'});
        res.end("404 error page is this  ");
    }
}).listen(8000);
