/*
*
* 使用express搭建服务器
*
* */

//1. 引入express
var express = require("express");

//2. 对express进行实例话

var app = new express();

//4. 配置路由  req: request  res:response
app.get("/",function (req,res) {
    res.send("hello express")
});

app.get("/login",function (req,res) {
    res.send("我是登陆")
})

//3. 设置监听的端口号
app.listen(3000,function () {
    console.log("http://localhost:3000")
});