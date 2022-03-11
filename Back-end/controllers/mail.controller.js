const Mail = require("../models/mail.model")

exports.getAllMails=(req,res)=>{
Mail.find().then((result)=>{
    res.send(result);
}).catch((err)=>{
    console.log(err)
})}

exports.getOneMail=(req,res)=>{
Mail.findById(req.params.id).then((result)=>{
   
    res.send(result);
}).catch((err)=>{
    console.log(err)
})}

exports.addMail=(req,res)=>{
   new Mail({
         userMail:req.body.userMail,
         userName:req.body.userMail,
         userId:req.body.userId,
         mailSubject:req.body.mailSubject,
         mailContent:req.body.mailContent
       
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'mail' to roles collection");
      });
    }

   
    
exports.removeMail=(req,res)=>{
Mail.findByIdAndDelete(req.params.id).then((result)=>{
   
    res.send(result);
}).catch((err)=>{
    console.log(err)})

}