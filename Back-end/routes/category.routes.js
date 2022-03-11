const categoriesController  = require("../controllers/category.controller");
const { authJwt } = require("../middlewares");

module.exports = function(app){
     app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
  });

  app.get("/api/category",categoriesController.getAllCategories);
  
     app.get("/api/categoryDetails/:id",categoriesController.getOneCategory);

    app.post(
    "/api/addcategory",
    [authJwt.verifyToken, authJwt.isAdmin],
    categoriesController.addCategory
  );
   app.put(
    "/api/updatecategory/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    categoriesController.updateCategory
  );

   app.delete(
    "/api/removecategory/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    categoriesController.removeCategory
  );
}