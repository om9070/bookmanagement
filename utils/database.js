const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://omprakash:op12345@cluster0.xxnt5.mongodb.net/book").then(()=>console.log("database is connected")).catch((e)=>console.log(e))


// mongoose.connect(process.env.database).then(()=>console.log("database is connected")).catch((e)=>console.log(e))
