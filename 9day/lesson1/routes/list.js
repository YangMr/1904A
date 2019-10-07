var express = require('express');
var router = express.Router();
var fs = require("fs");


/* GET home page. */
router.get('/list', function(req, res, next) {

   var data = fs.readFileSync("./data/list.json","utf8");

   res.send(data);
});

module.exports = router;
