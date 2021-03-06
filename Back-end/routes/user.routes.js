const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
module.exports = function(app) {
 app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
  });
  app.get("/api/test/all", controller.allAccess);
  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);
  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );
  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
  app.get(
    "/api/admin/users",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.getAllUsers
  );
 
   app.post(
    "/api/admin/addUser",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.addUser
  );
    app.put(
    "/api/admin/updateUser/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.updateUser
  );
   app.delete(
    "/api/admin/removeUser/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.removeUser
  );

   app.get(
    "/api/admin/userRoles/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.userRoles
  );

   app.get(
    "/api/admin/getAllRoles",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.getAllRoles
  );
};