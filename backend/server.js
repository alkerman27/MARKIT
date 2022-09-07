require("dotenv").config({ path: "backend/config/config.env" });

const app = require("./app");

const port = process.env.PORT;
const mode = process.env.NODE_ENV;

app.listen(port, () => {
  console.log(`Server started on PORT: ${port} in ${mode} mode.`);
});
