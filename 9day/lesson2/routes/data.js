var express = require("express");

var router = express.Router();

var fs = require("fs");

router.get("/api",function (req,res,next) {
    fs.readFile("./data/banner.json","utf8",function(error,data){
        if(error){
            console.log(error)
        }
        res.send(data)
    })
})

router.get("/list",function (req,res,next) {
    res.send("list")
})

module.exports = router