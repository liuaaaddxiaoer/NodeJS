const http = require('http');
const query = require('querystring');
const data = query.stringify({
    "offset":0,
    "pageSize":20,
    "accessToken":"XXlr_2kpWbOG_RtP_TCM6cXry4Zwyb1f6c6L6RmL641wvcC"
});
var options = {
      
};
const req = http.request("http://pkuie.euming.com/urming_pkuie/system/getMyIndex",function(res){
     res.on('data',function(chunk){
            console.log(chunk.toString());
     });
});
req.write(data);
req.end();