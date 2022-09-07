const Product = require("../models/productModel");

//create new Product => api/v1/admin/product/new

const newProduct = async (req, res) => {
  const product = await Product.create(req.body);

  res.status(200).json(product);
};

//get all Products => api/v1/products

const getProducts = async (req, res) => {
  const products = await Product.find({});

  res.status(200).json(products);
};

//get single product => api/v1/product/:id

const getOneProduct = async (req, res) => {
  const { id } = req.params;

  const product = await Product.findById(id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json(product);
};

//update a single product => api/v1/admin/product/:id

const updateProduct = async (req, res) => {
  const { id } = req.params;

  const product = await Product.findByIdAndUpdate(id, { ...req.body });

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json(product);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const product = await Product.findByIdAndDelete(id);

  if (!product) {
    res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json(product);
};

module.exports = {
  getProducts,
  newProduct,
  getOneProduct,
  updateProduct,
  deleteProduct,
};
