1.  nodejs没有web容器的概念进行文件的访问的时候必须进行文件的读取

```
var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){

    console.log(req.url);

   if(req.url == '/3.png') {
        fs.readFile("./3.png",function(err,data){
            res.end(data);
        });
   }else {
        fs.readFile("./test.html",function(err,data){
            res.end(data);
        });
   }


});

server.listen(3001,"127.0.0.1");
```
2 .访问图片也是一个单独的请求必须进行单独的判断读取文件然后返回才可以

3  node可以进行顶层路由的设计 你浏览器输入框内访问的 a资源在服务器那里可以是b等