# express

## express的安装

    1. 创建项目文件夹
        app
        
    2. 进入创建的文件夹目录
        cd app
        
    3. 创建一个package.json文件
        npm init
    
    4. 安装express
        
        cnpm install express --save
    
## 使用express搭建服务器

    1. 引入安装的express
    
    2. 对express进行实例化
    
    3. 配置路由
    
    4. 设置监听的端口号   
    
## 完成如下功能

    创建五个接口，分别是：
        /               访问localhost:3000 的时候，页面响应的是欢迎使用express       
        /login          访问localhost:3000/login 的时候，页面响应的是欢迎登陆
        /register       访问localhost:3000/register 的时候，页面响应的是欢迎注册
        /list           访问localhost:3000/list 的时候，页面响应的是欢迎list
        /search         访问localhost:3000/search 的时候，页面响应的是欢迎搜索
             

## 配置接口的方法
    
        app.get("/",function(req,res){})
            只能接收前台以get方式发送过来的请求
        app.post("/",function(req,res){})
            只能接收前台以post方式发送过来的请求
        app.use("/",function(req,res){})
             课题接收前台以get方式和post方式发送过来的请求
             
## 接收前台以get方式发送过来的数据

        req.query 
        
## 接收前台以post方式发送过来的数据

        req.body
        
        在这里，只使用req.body还不能够接收到前台以post方式发送过来的数据
        
        还需要安装 body-parser 中间件
        
        引入body-parser中间件
            var bodyParser = require("body-parser");
            app.use(bodyParser.json()) 
            app.use(bodyParser.urlencoded({ extended: false }))  
            
            
## 配置二级路由

    1. 在项目的根目录里面创建一个文件夹，名称叫做 router   
    2. 在router文件夹里面创建一个js文件, 名称： index.js
    3. 在index.js文件里面引入express
        var express = require("express");
    4. 在index.js文件里面获取router
        var router = express.Router();
    5.导出路由，说白了导出router
        module.exports = router
    6. 在module.export = router代码上面配置二级路由接口
        router.get("二级路由的路径",function(req,res){
        
        })
         或者
        router.post("二级路由的路径",function(req,res){
                            
         }) 
         或者
        router.use("二级路由的路径",function(req,res){
                           
         })
    7. 回到app.js文件里面，引入刚才定义的二级路由文件
        var indexRouter = require("./router/index.js");
        
    8. 使用一级路由去加载二级路由或者或是让一级路由和二级路由关联起来
        app.use("一级路由的名称",indexRouter) 
        或者
        app.get("一级路由的名称",indexRouter) 
        或者
        app.post("一级路由的名称",indexRouter)                     
                   
            
         
        
        
                            