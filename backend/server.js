require("dotenv").config({ path: "backend/config/config.env" });
const connectDb = require("./config/database");
const app = require("./app");

const port = process.env.PORT;
const mode = process.env.NODE_ENV;

//connecting to db

connectDb();

//listen to server
app.listen(port, () => {
  console.log(`Server started on PORT: ${port} in ${mode} mode.`);
});
