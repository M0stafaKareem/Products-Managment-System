const { body } = require("express-validator");

const addNewProductValidation = [
  body("name")
    .notEmpty()
    .withMessage("Product Name is required")
    .isLength({ min: 3 })
    .withMessage("Product Name min length is 3 chars "),
  body("description")
    .notEmpty()
    .withMessage("Product description is required")
    .isLength({ min: 5 })
    .withMessage("Product description min length is 5 chars "),
  body("price")
    .notEmpty()
    .withMessage("Product price is required")
    .isNumeric()
    .withMessage("Product price Must be a number")
    .isFloat({ gt: 0 })
    .withMessage("Product price Must be a Positive number"),
  body("category")
    .notEmpty()
    .withMessage("Product category is required")
    .isLength({ min: 5 })
    .withMessage("Product category min length is 5 chars "),
  body("image").isURL().withMessage("Product image must be a valid URL"),
];

const updateProductValidation = [
  body("name")
    .optional()
    .isLength({ min: 5 })
    .withMessage("Product Name min length is 5 chars "),
  body("description")
    .optional()
    .isLength({ min: 5 })
    .withMessage("Product description min length is 5 chars "),
  body("category")
    .optional()
    .isLength({ min: 5 })
    .withMessage("Product category min length is 5 chars "),
  body("image")
    .optional()
    .isURL()
    .withMessage("Product image must be a valid URL"),
  body("price")
    .optional()
    .isNumeric()
    .withMessage("Product price Must be a number")
    .isFloat({ gt: 0 })
    .withMessage("Product price Must be a Positive number"),
];

const addReviewValidation = [
  body("reviewerName")
    .notEmpty()
    .withMessage("Reviewer Name is required")
    .isLength({ min: 3 })
    .withMessage("Reviewer Name min length is 3 chars"),
  body("rating")
    .notEmpty()
    .withMessage("Review rating is required")
    .isFloat({ min: 0, max: 5 })
    .withMessage("Review rating must be between 0 and 5"),
  body("comment")
    .optional()
    .isLength({ min: 5 })
    .withMessage("Review comment must be at least 5 characters"),
];

module.exports = {
  addNewProductValidation,
  updateProductValidation,
  addReviewValidation,
};
