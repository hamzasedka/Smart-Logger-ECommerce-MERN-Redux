const Product = require("../models/product.model")

exports.getAllProducts=(req,res)=>{
Product.find().then((result)=>{
    res.send(result);
}).catch((err)=>{
    console.log(err)
})
}