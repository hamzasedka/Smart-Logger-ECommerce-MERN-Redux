const mongoose =require("mongoose");
const Role=mongoose.model(
   "Role",
   new mongoose.Schema({
       roleName:String
   },{
    timestamps:true,
}) 
)
module.exports =Role;