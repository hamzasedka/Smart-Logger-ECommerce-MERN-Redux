const mongoose=require("mongoose");
const productfeedBack=mongoose.Schema({
    userName:String,
    feedBackContent:String,
    
},{
    timestamps:true,
})
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
        productFeedBack:productfeedBack,
        productCategory:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Category"
            }

    },{
    timestamps:true,
})
)
module.exports=Product;