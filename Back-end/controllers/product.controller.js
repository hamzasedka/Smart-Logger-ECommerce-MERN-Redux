const Product = require("../models/product.model")

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
        productPrice:parseInt(req.body.productPrice),
        productStock:parseInt(req.body.productStock),
        productStatus:req.body.productStatus,
        productRating:parseInt(req.body.productRating),
        productCategory:req.body.productCategory
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'user' to roles collection");
      });
    }

    exports.updateProduct=(req,res)=>{
   Product.findByIdAndUpdate(req.params.id,
    {
         productTitle:req.body.productTitle,
        productDisc:req.body.productDisc,
        prodcutImage:req.body.productImage,
        productPrice:parseInt(req.body.productPrice),
        productStock:parseInt(req.body.productStock),
        productStatus:req.body.productStatus,
        productRating:parseInt(req.body.productRating),
        productCategory:req.body.productCategory
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