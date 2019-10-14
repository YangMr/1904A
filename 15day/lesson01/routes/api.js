/*配置数据接口的路由文件*/
//引入express
var express = require("express");
//获取router
var router = express.Router();

//引入userModel.js
var lessonModel = require("../lib/model/userModel");

//创建接口
//写入数据接口
router.get("/add",function (req,res,next) {
    console.log(req.query)
    //获取前台发送过来的数据
    var data = req.query;

    //将数据存储到数据库
    var model = new lessonModel(data);
    model.save(function (error,docs) {
        if(error){
            res.send({
                code : 1,
                message : "数据存储失败"
            })
        }else{
            res.send({
                code : 0,
                message : "数据存储成功"
            })
        }
    })
});

//读取数据接口
router.get("/read",function (req,res,next) {
    lessonModel.find({},function (error,data) {
        if(error){
            res.send({
                code : 2,
                message : "数据读取失败"
            })
        }else{
            res.send({
                code : 0,
                message : "数据读取成功",
                data : data
            })
        }
    })
});

//删除数据的接口
router.get("/del",function (req,res,next) {
    lessonModel.remove(req.query,function (error) {
        if(error){
            res.send({
                code : 3,
                message : "数据删除失败"
            })
        }else{
            res.send({
                code : 0,
                message : "数据删除成功"
            })
        }
    })
});

//修改数据的接口
router.get("/update",function (req,res,next) {
    lessonModel.update(req.query.f,req.query.con,function (error) {
        if(error){
            res.send({
                code : 4,
                message : "数据修改失败"
            })
        }else{
            res.send({
                code : 0,
                message : "数据修改成功"
            })
        }
    })
});


//搜索数据的接口
router.get("/search",function (req,res,next) {
    lessonModel.find(req.query,function (error,data) {
        if(error){
            res.send({
                code : 5,
                message : "数据查找失败"
            })
        }else{
            res.send({
                code : 0,
                message : "数据查找成功",
                data : data
            })
        }
    })
});


//模糊搜索
router.get("/keyword",function (req,res,next) {
    var data = req.query;   //  jack

    console.log(new RegExp(data.name))

    lessonModel.find({"name" : new RegExp(data.name,"i")},function (error,data) {
        if(error){
            res.send({
                code : 6,
                message : "数据查找失败"
            })
        }else{
            res.send({
                code : 0,
                message : "数据查找成功",
                data : data
            })
        }
    })


})


//导出router
module.exports = router