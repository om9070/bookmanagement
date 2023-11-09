const { ObjectId } = require('mongodb');

exports.checkBookData = (title, author, summary) => {
  if (title && author && summary) {
    return true;
  } else {
    return false;
  }
};

exports.mongodbId=(id)=>{
const result=ObjectId.isValid(id) // false
return result?true:false
}
