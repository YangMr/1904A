var express = require("express");

var router = express.Router();

var fs = require("fs");

router.get("/list",function (req,res,next) {
    var data = fs.readFileSync("./data/list.json","utf8");
    res.send(data);
})

router.get("/banner",function (req,res,next) {
    var data = fs.readFileSync("./data/banner.json","utf8");
    res.send(data);
})

module.exports = router;