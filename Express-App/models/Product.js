const mongoose = require("mongoose");
require("../config/db");
const Productschema = mongoose.Schema({
    Cname:{
        type:String,
        ref:"category",
        required:true
    },
    Pname:{
        type:String
    },
    color:{
        type:String
    },  
    price:{
        type:Number
    },
    warranty:{
        type:Number
    }
})
const Product = mongoose.model("Product",Productschema)
module.exports=Product;