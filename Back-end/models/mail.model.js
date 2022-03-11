const mongoose=require("mongoose");
const Mail= mongoose.model(
    "Mail",
    new mongoose.Schema({
        userMail:String,
        userName:String,
        userId:String,
        mailSubject:String,
        mailContent:String
    },{
    timestamps:true,
})
)
module.exports =Mail;