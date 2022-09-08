const Product = require("../models/productModel");
const ErrorHandler = require("../utilities/errorHandler");
const asyncErrors = require("../middlewares/asyncErrors");
const APIFeatures = require("../utilities/apiFeatures");

//create new Product => api/v1/admin/product/new
const newProduct = asyncErrors(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(200).json(product);
});

//get all Products => api/v1/products
const getProducts = asyncErrors(async (req, res, next) => {
  const resultPerPage = 4;

  //use to count product in the frontend
  const productCount = await Product.countDocuments();

  const apiFeatures = new APIFeatures(Product, req.query)
    .search()
    .pagination(resultPerPage)
    .filter();

  const products = await apiFeatures.query;

  res.status(200).json({
    count: products.length,
    productCount,
    products,
  });
});

//get single product => api/v1/product/:id
const getOneProduct = asyncErrors(async (req, res, next) => {
  const { id } = req.params;

  const product = await Product.findById(id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json(product);
});

//update a single product => api/v1/admin/product/:id
const updateProduct = asyncErrors(async (req, res, next) => {
  const { id } = req.params;

  const product = await Product.findByIdAndUpdate(id, { ...req.body });

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json(product);
});

//delete a product => api/v1/admin/product/:id
const deleteProduct = asyncErrors(async (req, res, next) => {
  const { id } = req.params;

  const product = await Product.findByIdAndDelete(id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json(product);
});

module.exports = {
  getProducts,
  newProduct,
  getOneProduct,
  updateProduct,
  deleteProduct,
};
