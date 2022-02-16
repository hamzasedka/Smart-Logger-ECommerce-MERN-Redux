const mongoose=require("mongoose");
const Product=mongoose.model(
    "Product",
    new mongoose.Schema({
        productTitle:String,
        productDisc:String,
        prodcutImage:String,
        productPrice:Number,
        productStock:Number,
        productStatus:Boolean,
        productRating:Number,
        productCategory:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Category"
            }

    })
)
module.exports=Product;