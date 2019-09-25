//引入express
var express = require("express");
//引入body-parse
var bodyParser = require("body-parser");
//实例话express
var app = new express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//引入刚才定义的二级路由文件
var indexRouter = require("./router/index");

//配置静态资源服务器
app.use(express.static("public"));

/*
* 配置接口
* */

app.use("/api",indexRouter)


//设置监听的端口号
app.listen(8000,function () {
    console.log("http://localhost:8000")
})