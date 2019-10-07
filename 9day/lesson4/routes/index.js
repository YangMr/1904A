var express = require("express");

var router = express.Router();

var fs = require("fs");


router.get("/",function (req,res,next) {
    res.render("index");
})

router.get("/list",function (req,res,next) {

    res.render("list")
})

router.get("/news",function (req,res,next) {
    res.render("news");
});




module.exports = router;