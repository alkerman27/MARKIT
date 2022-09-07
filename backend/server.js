require("dotenv").config({ path: "backend/config/config.env" });
const connectDb = require("./config/database");
const app = require("./app");

const port = process.env.PORT;
const mode = process.env.NODE_ENV;

//Handle Uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log("Shutting down server due to uncaught exception");
  process.exit(1);
});

//connecting to db
connectDb();

//listen to server
const server = app.listen(port, () => {
  console.log(`Server started on PORT: ${port} in ${mode} mode.`);
});

// Handling Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log("Shutting down the server due to unhandled promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
