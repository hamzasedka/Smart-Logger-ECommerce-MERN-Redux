const mongoose=require("mongoose");
const Product=mongoose.model(
    "Product",
    new mongoose.Schema({
        productTitle:String,
        productDisc:String,
        prodcutImage:String,
    })
)
module.exports=Product;