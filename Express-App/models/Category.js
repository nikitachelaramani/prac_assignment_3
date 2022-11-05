const mongoose = require("mongoose");
require("../config/db");
const CategorySchema = mongoose.Schema({
   
    Cname:{
        type:String
    }
})
const Category = mongoose.model("Category",CategorySchema)
module.exports=Category;