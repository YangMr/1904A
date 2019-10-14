//引入连接数据库的文件 db.js
var mongoose = require("../db/db");

//定义schema
var userSchema = mongoose.Schema({
    "id" : Number,
    "name" : String,
    "date" : String,
    "sex" : String,
    "class" : String
});

//导出userSchema
module.exports = userSchema;