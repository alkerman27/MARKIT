const User = require("../models/userModel");

const ErrorHandler = require("../utilities/errorHandler");
const asyncErrors = require("../middlewares/asyncErrors");

const registerUser = asyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "1234",
      url: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
    },
  });

  res.status(200).json(user);
});

module.exports = { registerUser };
