const mongoose = require("mongoose")
require("../db/db")
var cat_Schema = mongoose.Schema({
    c_id:mongoose.Schema.Types.ObjectId,
    category_name:String
})
const Category = mongoose.model("Category",cat_Schema);
module.exports= Category