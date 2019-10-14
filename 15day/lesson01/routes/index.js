// 主要是为了渲染模版引擎

//引入express
var express = require("express");
//获取router路由
var router = express.Router();

//配置两个接口，渲染模版引擎
router.get("/",function (req,res,next) {
    res.render("add");
});

router.get("/show",function (req,res,next) {
    res.render("show");
});

//导出router
module.exports = router;