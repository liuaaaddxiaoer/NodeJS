const http = require("http");
const server = new http.Server();
server.on("request",function(res,req){
    req.end("jaja");

}).listen(3002);