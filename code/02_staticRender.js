var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){

    console.log(req.url);

   if(req.url == '/3.png') {
        fs.readFile("./test/3.png",function(err,data){
            res.end(data);
        });
   }else {
        fs.readFile("./test/test.html",function(err,data){
            res.end(data);
        });
   }


});

server.listen(3001,"127.0.0.1");