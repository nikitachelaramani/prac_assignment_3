const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/vehicle_db").then(()=>{
        console.log("Con Done");
}).catch((e)=>{
    console.log(e)
})