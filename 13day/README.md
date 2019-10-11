# Bootstrap

## 下载

    1. 通过浏览器下载   
        https://v3.bootcss.com/getting-started/
    2. 通过cnpm进行下载
        cnpm install bootstrap@3 
        
## 使用


----------------------------------------------------------

## 案例1

    1. 使用命令行进入到 13day   
    
        cd 13day
        
    2. 使用express脚手架创建项目
    
        express 项目名称 --view=ejs
        
    3. 进入项目名称目录
    
        cd 项目名称
        
    4. 安装项目所需要的依赖
    
        cnpm install 
        
    5. 启动项目（测试项目是否能够启动）
    
        npm start
        
    6. 在浏览器访问localhost:3000 (访问的目的是 项目的内容是否正常展示)
    
        http://localhost:3000 
        或者
        http://127.0.0.1
        
    7. 在命令行退出项目服务器
    
        ctrl + c
        
    8. 安装mongoose模块（安装mongoose模块为了连接数据库）
    
        cnpm install mongoose --save
        
    9. 重新启动项目
    
        npm start
        
    10. 在项目名称文件夹内创建lib文件夹
    
    
    11. 在lib文件夹内创建3个文件夹，分别是
    
        db      db文件夹存放的是 连接数据库的文件
        schema  schema文件夹存放的是定义schema的文件
        model   model文件夹存放的是定义模型的文件    
        
    12. 在db文件夹内创建db.js(这个文件的内容是连接数据库服务器的内容)
    
         //引入mongoose
         var mongoose = require("mongoose");
         
         //连接数据库服务器
         mongoose.connect("mongodb://localhost/数据库名称", function(error){
            if(error){
                console.log("数据库连接失败")
            }else{
                console.log("数据库连接成功")
            }
         })             
         
        //导出mongoose
        module.exports = mongoose
        
    13. 在schema文件夹内创建 集合名Schema.js
    
        //引入db.js文件
        var mongoose = require("../db/db");
        
        //定义schema
        var  集合名Schema = mongoose.Schema({
                //字段及类型
            }) 
            
        //导出集合名Schema
        module.exports = 集合名Schema
        
    14. 在model文件夹内创建 集合名Model.js  
    
        //引入db.js
        var mongoose = require("../db/db");
        
        //引入集合名schema.js
        var 集合名Schema = require("../schema/集合名Schema")
        
        //创建模型 
        var 集合名Model = mongoose.model("集合名Model",集合名Schema,集合名);
        
        //导出模型               
        module.exports = 集合名Model
        
    15. 注意：
    
        连接数据库时要保证数据库服务器已经开启
        数据库服务器里面要用连接的数据库
        连接的数据库里面需要用集合
        
    16. 在app.js文件内配置一级路由,顺便把之前的路由以及引入的二级路由文件删掉，配置一级路由需要配置两个
            
            一个是 渲染模版引擎的一级路由
                app.use("/", 渲染模版引擎的二级路由)
                
            一个是 数据接口的路由
                app.use("/api", 数据接口的二级路由)
                
    17. 在routes文件夹内创建两个js文件，这两个js文件分别是： index.js  api.js
        
            index.js   渲染模版引擎的二级路由
            
                //引入express
                var express = require("express");
                
                //获取路由router
                var router = express.Router();
                
                //配置渲染模版引擎的接口
                router.get("接口名称",function(req,res,next){
                    res.render("要渲染模版引擎文件的名称")
                });
                
                //导出路由
                module.exports = router
                
            
            
            api.js     数据接口的二级路由
            
                //引入express
                var express = require("express");
                
                //获取路由router
                var router = express.Router();
                
                //配置数据接口
                router.get("接口名称",function(req,res,next){
                    res.send("要返回的数据")
                })
                
                //导出路由
                module.exports = router
            
    18. 回到app.js文件，引入创建的index.js文件与api.js文件
    
            //引入渲染模版引擎的二级路由文件
            var indexRouter =  require("./routes/index");
            
            //引入数据接口的二级路由文件
            var apiRouter = require("./routes/api");
            
            //让一级路由去加载二级路由
            app.use("/", indexRouter);
            app.use("/api",apiRouter);
            
    19. 回到渲染模版引擎的二级路由文件，在这个文件内获取数据库的数据，将获取到的数据库数据传递到模版引擎文件，并进行渲染
    
            //引入集合名Model.js文件
            var model = require("../lib/model/集合名Model.js");
            
            //在渲染模版引擎接口里面获取数据并进行传递
            router.get("/",function(req,res,next){
                //获取数据库的数据
                model.find({},function(error,data){
                    if(error){
                        console.log("数据获取失败");
                    }else{
                        res.render("模版引擎文件的名称",{
                            data : data
                        })
                    }
                })
                
            })         
               
    20. 回到渲染的模版引擎文件，将传递过来的数据通过ejs语法进行渲染
    
            <% for(var i=0;i<data.length;i++){%>
                输出的数据
            <% } %>     
            
    
    21. 回到api.js文件，配置四个接口，分别是对数据库的增删改查
        
            //引入集合名Model.js文件
            var model = require("../lib/model/集合名Model.js");
            
            //读取数据的接口
            router.get("read",function(req,res,next){
                model.find({},function(error,data){
                    if(error){
                        res.send({
                            code : 1,
                             message : "数据读取失败"
                        })
                    }else{
                        res.send({
                            code : 0,
                            message : "数据读取成功"
                        })
                    }
                })
            })
            
            //写入数据的接口
            router.get("write",function(req,res,next){
                //获取前台发送过来的数据
                var data = req.query;
                
                //给数据库写入数据
                var m = new model(data);
                m.save(function(error){
                    if(error){
                        res.send({
                            code : 2,
                            message : "数据写入失败"
                        })
                    }else{
                        res.send({
                            code : 0,
                            message : "数据写入成功"
                        })
                    }
                }) 
                
           
               
        
    
                                
                         
            
            
    
                
                          