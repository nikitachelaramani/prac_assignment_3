const router = require("express").Router();
const Vehicle = require("../models/Vehicle")
const category = require("../models/category")
const multer = require("multer")
const path = require("path")

var Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,"./uploads");
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null,Date.now() + path.extname(file.originalname));
    }
})

var upload = multer({
    storage: Storage
});
router.get("/",async(req,res)=>{
    category.find((err,data)=>{
        if(!err)
        {
            res.render("add",{cat:data})
        }
    })
})
router.post("/add", upload.single('image') , async(req,res)=>{
  //  console.log(req.body.file)
  const val1 =parseInt(req.body.price);
  const val2 = parseInt(req.body.desc);
  const val3 = parseInt(req.body.noy);
  const totalprice = (val1-val2)*val3/val3
    var vehicle = new Vehicle
    ({
        vehicle_brand:req.body.brand,
        category_name:req.body.category,
        Picture:req.file.filename,
        price:req.body.price,
        depreciation:req.body.desc,
        Nfy:req.body.noy,
        tprice:totalprice,
    })
    var data = await vehicle.save();
    res.redirect("/index");    
})
router.get("/index",(req,res)=>{
    Vehicle.find((err,data)=>{
        if(!err)
        {
            res.render("index",{cat:data})
        }
    })
})

module.exports= router