const mongoose=require("mongoose");
const Category= mongoose.model(
    "Category",
    new mongoose.Schema({
        CategoryName:String,
    })
)
module.exports =Category;