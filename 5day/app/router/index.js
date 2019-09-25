//引入express
var express = require("express");

//获取router
var router = express.Router();

//配置二级路由
router.use("/banner",function (req,res) {
    res.send("banner");
});

router.use("/list",function (req,res) {
    res.send("list");
})


//导出路由
module.exports = router