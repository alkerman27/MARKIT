const User = require("../models/userModel");

const ErrorHandler = require("../utilities/errorHandler");
const asyncErrors = require("../middlewares/asyncErrors");

// register user
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

  const token = user.getJwtToken();

  res.status(200).json({ sucess: true, token });
});

// login user
const loginUser = asyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  // check email & password
  if (!email || !password) {
    return next(new ErrorHandler("Please enter email & password", 400));
  }

  // finding user in database
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  //check if password is correct

  const isPasswordMatch = await user.comparePassword(password);

  if (!isPasswordMatch) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  const token = user.getJwtToken();

  res.status(200).json({
    sucess: true,
    token,
  });
});

module.exports = { registerUser, loginUser };
