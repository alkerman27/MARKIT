require("dotenv").config({ path: "backend/config/config.env" });

const Product = require("../models/productModel");

const connectDb = require("../config/database");

const products = require("../data/product.json");

connectDb();

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    console.log("Products deleted");

    await Product.insertMany(products);
    console.log("All Products are added.");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
