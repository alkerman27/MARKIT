const express = require("express");

//import all routes
const products = require("./routes/product");

app = express();

//middleware
app.use(express.json());

app.use("/api/v1", products);

module.exports = app;
