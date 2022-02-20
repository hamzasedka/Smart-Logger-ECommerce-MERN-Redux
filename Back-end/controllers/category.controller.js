const Category = require("../models/categories.model")

exports.getAllCategories=(req,res)=>{
Category.find().then((result)=>{
    console.log(result);
    res.send(result);
}).catch((err)=>{
    console.log(err)
})}