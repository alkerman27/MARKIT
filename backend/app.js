const express = require("express");
const errorMiddleware = require("./middlewares/errors");
//import all routes
const products = require("./routes/product");
const users = require("./routes/user");
app = express();

//middlewares
app.use(express.json());

app.use("/api/v1", products);
app.use("/api/v1", users);

app.use(errorMiddleware);

module.exports = app;
