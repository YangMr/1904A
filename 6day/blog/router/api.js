//引入express
var express = require("express");
//引入fs模块
var fs = require("fs");
//获取到router
var router = express.Router()
//配置二级路由
router.get("/readlist",function (req,res) {
    fs.readFile("./data/list.json","utf8",function (error,data) {
        if(error){
            console.log(error)
        }else{
            res.send(data)
        }
    })
});

router.get("/writelist",function (req,res) {
    //接收前台以get方式发送过来的数据
    var user = req.query;

    //读取原来文件的数据
    var data = fs.readFileSync("./data/list.json","utf8");

    var list = JSON.parse(data).list;
    list.push(user.name);

    var obj = {
        list : list
    }

    fs.writeFile("./data/list.json",JSON.stringify(obj),"utf8",function (error) {
        if(error){
            console.log(error)
        }else{
            res.send({
                code : 0,
                message : "写入成功"
            })
        }
    })
})


//导出router
module.exports = router;