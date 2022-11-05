const mongoose = require("mongoose")
require("../db/db")
require("./category")
require("../db/db")
const Vehicle_data = mongoose.Schema({
    vehicle_brand:String,
    category_name:
    {
        type:String,
        ref:"category"
    },
    Picture:String,
    price:Number,
    depreciation:Number,
    Nfy:Number,
    tprice:Number
})
const Vehicle = mongoose.model("Vehicle",Vehicle_data);
module.exports= Vehicle