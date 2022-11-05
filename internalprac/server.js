const express = require("express");
const app = express()
const router = require("./routers/router")
app.use(express.urlencoded({extended:false}))

app.use(express.json());
app.use(express.static('uploads'))

app.set('view engine','hbs')

app.use("/",router)

app.listen(5000,()=>{
    console.log("listening on 5000")
})