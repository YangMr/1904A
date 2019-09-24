//1。 引入http模块
var http = require("http");
//2。 引入url模块
var url = require("url");
//2. 创建服务器
var server = http.createServer(function (request,response) {
    //http://localhost:3000/api/banner?age=20
    var path = url.parse(request.url,true).pathname;
    if(path === "/api/banner"){

    }
});

//3. 设置监听的端口号
server.listen(3000,function () {
    console.log("http://localhost:3000")
})

