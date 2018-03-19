```
var http = require('http');
console.dir(http);

var server = http.createServer((req, res) => {
    res.end("haha");

});

server.listen(3000,"127.0.0.1");

console.dir(server);
```

1. require导入http 模块
2. createServer是一个http模块的全局的函数可以创建一个服务器 类似命名空间的概念
	
```
export function createServer(requestListener?: (request: IncomingMessage, response: ServerResponse) => void): Server;
```
该函数有一个可选？的闭包 返回一个 Server

1. request对应请求  response对应响应

2. response 的end函数可以用来向页面输出内容

```
listen(port?: number, hostname?: string, backlog?: number, listeningListener?: Function): Server;
```
3 listen函数可以用来监听端口