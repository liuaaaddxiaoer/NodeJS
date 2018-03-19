const http = require("http");

const req = http.get("http://127.0.0.1:3002",function(res){
    // console.log(res.url+"haha");
    res.on('data',function(r){
        console.log(r.toString());
    });
});



