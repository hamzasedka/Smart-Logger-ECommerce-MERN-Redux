const productController  = require("../controllers/product.controller");
const controller = require("../controllers/user.controller");

module.exports = function(app){
     app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
  });

  app.get("/api/products",productController.getAllProducts)
}