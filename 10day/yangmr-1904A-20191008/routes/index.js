var express = require("express");

var router = express.Router();

var fs = require("fs");


router.post("/dologin",function (req,res,next) {

    var obj =fs.readFileSync("./data/data.json","utf8");
    var user = JSON.parse(obj).users;


    var data = req.body;


    for(var i=0;i<user.length;i++){

       if(user[i].name == data.name && user[i].pass==data.pass){
           res.redirect("/success")
       }else{
           res.redirect("/login")
       }
    }

    // for(var i=0;i<obj.length;i++){
    //     console.log(obj.name)
    //     if(obj.users[i].name == data.name && obj.users[i].pass == data.pass){
    //
    //         res.redirect("/success")
    //
    //         // res.send({
    //         //     code : 0,
    //         //     message : "登录成功"
    //         // })
    //     }else{
    //
    //         res.redirect("/login")
    //
    //
    //         // res.send({
    //         //     code : 1,
    //         //     message : "登录失败"
    //         // })
    //     }
    // }
})

router.get("/login",function (req,res,next) {
    res.render("login")
})

router.get("/success",function (req,res,next) {
    res.render("about")
})

module.exports = router;