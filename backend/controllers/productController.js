const Product = require("../models/productModel");

//create new Product => api/v1/product/new

const newProduct = async (req, res) => {
  const product = await Product.create(req.body);

  res.status(200).json(product);
};

const getProducts = (req, res) => {
  res.status(200).json({
    sucess: true,
    message: "This route will show all products in database.",
  });
};

module.exports = {
  getProducts,
  newProduct,
};
