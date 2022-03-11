const mongoose= require("mongoose");
mongoose.Promise =global.Promise;
const db={};
db.mongoose=mongoose;
db.user= require("./user.model")
db.role=require("./role.model")
db.product=require("./product.model")
db.category=require("./categories.model")
db.mail=require("./mail.model")

db.ROLES=["subscriber","admin","guest"];
module.exports=db;