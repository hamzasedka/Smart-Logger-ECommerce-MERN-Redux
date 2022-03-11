const mongoose=require("mongoose");
const Category= mongoose.model(
    "Category",
    new mongoose.Schema({
        CategoryName:String
        
    },{
    timestamps:true,
})
)
module.exports =Category;