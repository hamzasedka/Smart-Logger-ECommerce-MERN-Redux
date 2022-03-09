const Product = require("../models/product.model")
const ObjectId = require('mongoose').Types.ObjectId;

exports.getAllProducts=(req,res)=>{
Product.find().then((result)=>{
   
    res.send(result);
}).catch((err)=>{
    console.log(err)
})}
exports.getOneProduct=(req,res)=>{
Product.findById(req.params.id).then((result)=>{
   
    res.send(result);
}).catch((err)=>{
    console.log(err)
})}

exports.addProduct=(req,res)=>{
   new Product({
         productTitle:req.body.productTitle,
        productDisc:req.body.productDisc,
        prodcutImage:req.body.productImage,
        productPrice:parseFloat(req.body.productPrice),
        productStock:parseFloat(req.body.productStock),
        productStatus:req.body.productStatus,
        productRating:parseFloat(req.body.productRating),
        productCategory:ObjectId(req.body.productCategory)
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'user' to roles collection");
      });
    }

    exports.updateProduct=(req,res)=>{
      console.log(req.body);
   Product.findByIdAndUpdate(req.params.id,
    {
         productTitle:req.body.productTitle,
        productDisc:req.body.productDisc,
        prodcutImage:req.body.productImage,
        productPrice:parseFloat(req.body.productPrice),
        productStock:parseFloat(req.body.productStock),
        productStatus:req.body.productStatus,
        productRating:parseFloat(req.body.productRating),
        productCategory:ObjectId(req.body.productCategory)
      }).then((result)=>{
   
    res.send(result);
    }).catch((err)=>{
    console.log(err)}
    )
    }
    
exports.removeProduct=(req,res)=>{
Product.findByIdAndDelete(req.params.id).then((result)=>{
   
    res.send(result);
}).catch((err)=>{
    console.log(err)})

}