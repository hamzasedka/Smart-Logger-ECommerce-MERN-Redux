const Role = require("../models/role.model");
const User = require("../models/user.model")
var bcrypt = require("bcryptjs");
const ObjectId = require('mongoose').Types.ObjectId;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};
exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};
exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};
exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};


exports.getAllUsers=(req,res)=>{
User.find().then((result)=>{
    res.send(result);
}).catch((err)=>{
    console.log(err)
})
}

exports.userRoles=(req,res)=>{
Role.findById(req.params.id).then((result)=>{
    res.send(result);
}).catch((err)=>{
    console.log(err)
})
}
exports.getAllRoles=(req,res)=>{
Role.find().then((result)=>{
    res.send(result);
}).catch((err)=>{
    console.log(err)
})
}
exports.addUser=(req,res)=>{
        console.log(req.body);

   new User({
         username:req.body.username,
        userImage:req.body.userImage,
        status:req.body.status,
        email:req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        roles:[req.body.roles]
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'user' to roles collection");
      });
    }
exports.updateUser=(req,res)=>{
   User.findByIdAndUpdate(req.params.id,
    {
         username:req.body.username,
        userImage:req.body.userImage,
        status:req.body.status,
        password: bcrypt.hashSync(req.body.password, 8),
        email:req.body.email,
        roles:req.body.roles
      }).then((result)=>{
   
    res.send(result);
    }).catch((err)=>{
    console.log(err)}
    )
    }
exports.removeUser=(req,res)=>{
User.findByIdAndDelete(req.params.id).then((result)=>{
   
    res.send(result);
}).catch((err)=>{
    console.log(err)})

}