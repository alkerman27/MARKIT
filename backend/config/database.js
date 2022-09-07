const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI)
    .then((con) => {
      console.log(`MongoDB is connected with Host: ${con.connection.host}`);
    })
    .catch((error) => handleError(error));
};

module.exports = connectDb;
