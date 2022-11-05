const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Product_MeanStack").then(()=>{
    console.log("done");
}).catch((e)=>{
    console.log(e);
})