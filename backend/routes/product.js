const express = require("express");

const router = express.Router();

const {
  getProducts,
  newProduct,
  getOneProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.get("/products", getProducts);

router.get("/product/:id", getOneProduct);

router.post("/admin/product/new", newProduct);

router.patch("/admin/product/:id", updateProduct);

router.delete("/admin/product/:id", deleteProduct);

module.exports = router;
