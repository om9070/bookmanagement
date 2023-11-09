const mongoose=require("mongoose");

const bookschema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50
    }, 
    author:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50
    },
     summary:{
        type:String,
        required:true,
        minlength:5,
        maxlength:1000
    }
})
const Book=mongoose.model("books",bookschema)
module.exports=Book;