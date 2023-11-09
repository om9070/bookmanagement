const express=require("express");
const controller=require("../controller/book")
const route=new express.Router();

//upload book details
route.post("/uploadBook",controller.postBook)
//get all books
route.get("/getBooks",controller.getAllBooks)
//get book by id
route.get("/specificBook",controller.specificBook)
//update book by id
route.patch("/updateBook",controller.updateBook)
//delete book
route.delete("/deleteBook",controller.deleteBook)

module.exports=route;