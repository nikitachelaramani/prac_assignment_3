const router = require("express").Router();
const Product = require("../models/Product");
const bodyparser = require("body-parser");
const path = require("path");
const { pipeline } = require("stream");

//PRODUCTS API
router.post("/Product-add", async (req, res) => {
    // const {ProductId , Pname,color,price} = req.body;
    // console.log(`${ProductId}  + ${Pname} + ${color} + ${price}`);
    Product.create(req.body,(error, data) => {
        if (!error) {
            res.json(data);
        }
        else {
            res.json("ID not found");
        }
    })
})
router.get("/Product-list", (req, res) => {
    Product.find((err, data) => {
        if (!err) {
            res.json(data);
        }
    })
})
router.put("/Product-edit/:id", (req, res) => {
    
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, data) => 
    {
        if (!err) {
            res.json(data);
        } else {
            console.log("not update");
        }
    })
 })
router.get("/Get-Product/:id", (req, res) => {
    Product.findOne({ _id: req.params.id }, (err, data) => {
        if (!err) {
            res.status(200).json(data);
        }
    })
})
router.delete("/Product-delete/:id", (req, res) => {
    Product.findByIdAndRemove({ _id: req.params.id }, (err, data) => {
        if (!err) {
            res.status(200).json(data)
        }
    })
})
router.get("/users",async(req,res)=>{
   
    const data = await Product.aggregate([
        {
            $lookup:{
                from:'categories',
                localField:'_id',
                foreignField:'ProductId',                
                as:'Cname'
            }},         
    ])
    if(!data)
    {
        console.log("no data found");
    }
    else{
        res.status(201).json(data)
    }
})
//Trying TO Join 
// router.get("/users",(req,res)=>{
//     Product.aggregate(pipeline[
//      {
//         $lookup:{
//             from:"products",
//             as:"products",
//             let:{ProductId:"$_id"},
//             pipeline:[
//                 {$match:{$expr :{$eq:['$ProductId','$$ProductId']}}}
//             ]
//         }
//      },{
//         $project:{
//             _id:1,
//             Pname:1,
//             color:1
//         }
//      }
//     ]).exec((err,result)=>{
//         if(err)
//         {
//             res.send(err)
//         }
//         if(result)
//         {
//             console.log(result)
//             res.send(body,{
//                 Error:false,
//                 data:result
//             })
//         }
//     })
// })
// router.get("/users",(req,res)=>{
//     Product.find({}).populate('ProductId').
// })
module.exports = router