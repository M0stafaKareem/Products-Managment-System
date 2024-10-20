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
  .route("/:ProductId")
  .get(ProductsController.getProductById)
  .patch(
    ProductValidation.updateProductValidation,
    ProductsController.updateProductById
  )
  .delete(ProductsController.deleteProductById);

router
  .route("/review/:ProductId")
  .post(ProductValidation.addReviewValidation, ProductsController.insertReview);

router
  .route("/byCategory/:category")
  .get(ProductsController.getProductByCategory);

module.exports = router;
