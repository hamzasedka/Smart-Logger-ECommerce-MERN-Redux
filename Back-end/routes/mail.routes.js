const mailController  = require("../controllers/mail.controller");
module.exports = function(app){
     app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
  });

  app.get("/api/AllMails", [authJwt.verifyToken, authJwt.isAdmin],mailController.getAllMails);
  
     app.get("/api/MailContent/:id", [authJwt.verifyToken, authJwt.isAdmin],mailController.getOneMail);

    app.post(
    "/api/sendMail",
   
    categoriesController.addMail
  );

   app.delete(
    "/api/removeMail/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    mailController.removeMail
  );
}