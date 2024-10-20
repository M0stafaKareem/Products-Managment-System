const express = require("express");

const ProductsController = require("../Controller/products.controller");
const ProductValidation = require("../middlewares/products.validationSchema");

const router = express.Router();

router
  .route("/")
  .post(
    ProductValidation.addNewProductValidation,
    ProductsController.addNewProduct
  )
  .get(ProductsController.getAllProducts);

router
  .route("/review/:ProductId")
  .post(ProductValidation.addReviewValidation, ProductsController.insertReview);

router.route("/categories").get(ProductsController.getProductsCategories);

router
  .route("/categories/:category")
  .get(ProductsController.getProductByCategory);

router
  .route("/:ProductId")
  .get(ProductsController.getProductById)
  .patch(
    ProductValidation.updateProductValidation,
    ProductsController.updateProductById
  )
  .delete(ProductsController.deleteProductById);

module.exports = router;
