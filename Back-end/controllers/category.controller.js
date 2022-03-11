const Category = require("../models/categories.model")

exports.getAllCategories=(req,res)=>{
Category.find().then((result)=>{
    res.send(result);
}).catch((err)=>{
    console.log(err)
})}

exports.getOneCategory=(req,res)=>{
Category.findById(req.params.id).then((result)=>{
   
    res.send(result);
}).catch((err)=>{
    console.log(err)
})}

exports.addCategory=(req,res)=>{
   new Category({
         CategoryName:req.body.CategoryName,
       
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'Category' to roles collection");
      });
    }

    exports.updateCategory=(req,res)=>{
      console.log(req.body);
   Category.findByIdAndUpdate(req.params.id,
    {
         CategoryName:req.body.CategoryName,
      
      }).then((result)=>{
   
    res.send(result);
    }).catch((err)=>{
    console.log(err)}
    )
    }
    
exports.removeCategory=(req,res)=>{
Category.findByIdAndDelete(req.params.id).then((result)=>{
   
    res.send(result);
}).catch((err)=>{
    console.log(err)})

}