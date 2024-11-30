const mongoose = require("mongoose");

var schema = mongoose.Schema({
    Reg_No:Number,
    Name:String,
    Age:Number,
    Dept:String
    
})

var StudModel = mongoose.model("Student",schema)
module.exports=StudModel