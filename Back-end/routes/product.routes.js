const productController  = require("../controllers/product.controller");
const { authJwt } = require("../middlewares");
module.exports = function(app){
     app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
  });

  app.get("/api/products",productController.getAllProducts);
  app.get("/api/productDetails/:id",productController.getOneProduct);

    app.post(
    "/api/addProduct",
    [authJwt.verifyToken, authJwt.isAdmin],
    productController.addProduct
  );
   app.put(
    "/api/updateProduct/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    productController.updateProduct
  );

   app.delete(
    "/api/removeProduct/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    productController.removeProduct
  );
}