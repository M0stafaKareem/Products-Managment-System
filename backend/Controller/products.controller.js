const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { validationResult } = require("express-validator");
const { selectFields } = require("express-validator/lib/field-selection");

const addNewProduct = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: "fail", message: errors.array() });
    }

    const newProduct = req.body;
    const response = await prisma.products.create({
      data: newProduct,
    });

    res.status(201).json({
      status: "success",
      data: response,
      message: "new Product added successfully",
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: "Something went wrong" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const { limit = 5, page = 1 } = req.query;
    const skip = (+page - 1) * +limit;

    const Products = await prisma.products.findMany({
      take: +limit,
      skip: +skip,
      orderBy: { id: "asc" },
    });
    const ProductsCount = await prisma.products.count();

    if (Products.length) {
      res.json({
        status: "success",
        data: { Products, ProductsCount },
      });
    } else {
      res.status(404).json({
        status: "fail",
        message: "no Products found",
      });
    }
  } catch {
    res.status(500).json({ status: "error", message: "Something Went Wrong" });
  }
};

const getProductById = async (req, res) => {
  const ProductId = +req.params.ProductId;

  try {
    const Product = await prisma.products.findUnique({
      where: { id: ProductId },
      include: {
        reviews: true,
      },
    });
    const avgRating = (
      await prisma.review.aggregate({ _avg: { rating: true } })
    )._avg.rating.toFixed(1);

    if (!Product) {
      res.status(404).json({
        status: "fail",
        message: "Product not found",
      });
    } else {
      res.json({ status: "success", data: { Product, avgRating } });
    }
  } catch (err) {
    res
      .status(500)
      .json({ status: "error", message: "an error happened " + err });
  }
};

const getProductByCategory = async (req, res) => {
  const category = req.params.category;
  try {
    const { limit = 5, page = 1 } = req.query;
    const skip = (+page - 1) * +limit;

    const Products = await prisma.products.findMany({
      where: { category: category },
      take: +limit,
      skip: +skip,
      orderBy: { id: "asc" },
    });

    if (!Products.length) {
      res.status(404).json({
        status: "fail",
        message: "no Products found for category " + category,
      });
    } else {
      const ProductsCount = await prisma.products.count({
        where: { category: category },
      });
      res.json({ status: "success", data: { Products, ProductsCount } });
    }
  } catch (err) {
    res.status(500).json({ status: "error", message: "An error happened" });
  }
};

const getProductsCategories = async (req, res) => {
  try {
    const categories = await prisma.products.findMany({
      select: { category: true },
    });
    const uniqueCategories = [
      ...new Set(categories.map((item) => item.category)),
    ];

    res.json({ status: "success", data: uniqueCategories });
  } catch (err) {
    res
      .status(500)
      .json({ status: "error", message: "An error happened" + err });
  }
};

const updateProductById = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: "fail", message: errors.array() });
    }

    const ProductId = +req.params.ProductId;
    const productExists = await prisma.products.findUnique({
      where: { id: ProductId },
    });
    if (!productExists) {
      return res
        .status(404)
        .json({ status: "fail", message: "Product not found" });
    }
    const product = await prisma.products.update({
      where: { id: ProductId },
      data: {
        ...req.body,
      },
    });

    return res.json({
      status: "success",
      message: "Product updated successfully",
      data: product,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ status: "error", message: "Something went wrong" });
  }
};

const deleteProductById = async (req, res) => {
  const ProductId = +req.params.ProductId;
  try {
    const productExists = await prisma.products.findUnique({
      where: { id: ProductId },
    });
    if (!productExists) {
      return res
        .status(404)
        .json({ status: "fail", message: "Product not found" });
    }

    await prisma.products.delete({
      where: { id: ProductId },
    });
    res.json({ status: "success", message: "Product deleted successfully" });
  } catch {
    res.status(500).json({
      status: "error",
      message: "Error deleting Product",
    });
  }
};

const insertReview = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: "fail", message: errors.array() });
    }

    const ProductId = +req.params.ProductId;
    const review = await prisma.review.create({
      data: {
        ...req.body,
        productId: ProductId,
      },
    });

    return res.status(201).json({
      status: "success",
      data: review,
      message: "Review added successfully",
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: "Something went wronge " + err,
    });
  }
};

module.exports = {
  addNewProduct,
  getAllProducts,
  getProductById,
  getProductByCategory,
  deleteProductById,
  updateProductById,
  insertReview,
  getProductsCategories,
};
