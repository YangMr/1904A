//引入express
var express = require("express");

//实例化express
var app = new express();

//搭建静态资源服务器
app.use(express.static("./public"));

//引入二级路由文件
var apiRouter = require("./router/api");

//配置二级路由
app.use("/api",apiRouter)


//设置监听的端口号
app.listen(3000,function () {
    console.log("http://localhost:3000");
})