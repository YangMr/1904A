//引入express
var express = require("express");

//获取路由router
var router = express.Router();

//配置模版引擎的路由
router.get("/read",function(req,res,next){
    
});

router.get("/write",function (req,res,next) {
    
})

//导出router
module.exports = router;