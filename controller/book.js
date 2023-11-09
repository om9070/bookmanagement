const book = require("../model/bookSchema");
const validFucntion = require("../utils/validator");
const message = require("../utils/message");

exports.postBook = async (req, res) => {
  try {
    const { title, author, summary } = req.body;

    //checkValidation
    const checkValidData = await validFucntion.checkBookData(title,author,summary );
    if (!checkValidData)return res.status(400) .send({ message: message.register.invalid, status: false });

    //store data in DB
    const storeBook = new book(req.body);
    await storeBook.save();
    return res .status(201).json({ message: message.register.sucess, status: true });
  } catch (error) {
    console.log(error, "uploadBook error found");
    return res
      .status(400)
      .json({ message: message.register.fail, status: false });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const getBooks = await book.find();
    return res .status(200).json({ message: message.getBooks.sucess, status: true,data:getBooks });

  } catch (er) {
    console.log(er, "get all books errror");
    return res .status(401).json({ message: message.getBooks.fail, status: false });
  }
};

exports.specificBook = async (req, res) => {
    try {
      const {_id}=req.query;
      //check the valid mongoose objectId
      const checkId = await validFucntion.mongodbId(_id);
      if(!checkId)return res .status(200).json({ message: message.specificBook.validId, status: false });
      //get specific data
      const getSingleBook = await book.find({_id});
      return res .status(200).json({ message: message.specificBook.sucess, status: true,data:getSingleBook });
  
    } catch (er) {
      console.log(er, "get specificBook errror");
      return res .status(401).json({ message: message.specificBook.fail, status: false });
    }
};

exports.updateBook=async(req,res)=>{
try{
    const {_id}=req.body;
    //check the valid mongoose objectId
    const checkId = await validFucntion.mongodbId(_id);
    if(!checkId)return res .status(200).json({ message: message.specificBook.validId, status: false });

  let id={_id}
  let  updateData={$set:{  ...req.body}}
  let defalutParams={new:true}

 const updateBook=await book.findByIdAndUpdate(_id,updateData,defalutParams);
 return res .status(200).json({ message: message.updateData.sucess, status: true,data:updateBook });

}catch(err){
    console.log("update book error",err);
    return res .status(401).json({ message: message.updateData.fail, status: false });
}
}

exports.deleteBook=async(req,res)=>{
try{
    const {_id}=req.body;
    //check the valid mongoose objectId
    const checkId = await validFucntion.mongodbId(_id);
    if(!checkId)return res .status(200).json({ message: message.specificBook.validId, status: false });

    const deleteId=await book.findByIdAndDelete({_id});
    if(deleteId){
        return res .status(200).json({ message: message.bookDelete.sucess, status: true });
    }else{
        return res .status(200).json({ message: message.bookDelete.fail, status: false });
    }
}catch(e){
    console.log("delete error ",e)
    return res .status(200).json({ message: message.bookDelete.error, status: false });

}
}