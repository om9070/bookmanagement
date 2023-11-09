const dotenv = require("dotenv");
dotenv.config({path:"utils/.env"})
const express=require("express");
const app=express();
const cors=require("cors")
const route=require("./router/routes")
require("./utils/database")
const port=process.env.port||4000;

//middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//router
app.use("/api",route)

app.get("/",(req,res)=>{
    res.send(`Api is Running`)
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})