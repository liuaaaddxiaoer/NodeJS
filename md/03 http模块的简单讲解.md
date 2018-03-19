> [http](http://www.jianshu.com/p/ab2741f78858)


```
const http = require("http");
const server = new http.Server();
server.on("request",function(res,req){
    req.end("jaja");

}).listen(3002);
```
和createserver函数基本一致


// 客户端向服务器端发送请求的函数  post get等

```
    export function request(options: RequestOptions | string | URL, callback?: (res: IncomingMessage) => void): ClientRequest;
    export function get(options: RequestOptions | string | URL, callback?: (res: IncomingMessage) => void): ClientRequest;
    export var globalAgent: Agent;
```