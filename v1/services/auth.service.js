const User = require("../../models/user.model");
const bcrypt = require("bcryptjs");
const auth = require("../../middlewares/auth.js");

const login = async ({ email, password }, cb) => {
  const user = await User.findOne({ email });
  const payload = {
    email: user.email,
    id: user._id,
    username: user.username,
  };
  if (user != null) {
    if (bcrypt.compareSync(password, user.password)) {
      const token = auth.generateAccessToken(payload);
      return cb(null, { ...user.toJSON(), token });
    } else {
      return cb({
        message: "Invalid Email or Password",
      });
    }
  } else
    cb({
      message: "Invalid Email or Password",
    });
};

const register = async (payload, cb) => {
  if (payload.username === undefined)
    return cb({
      message: "Username Required",
    });

  const user = new User(payload);
  user
    .save()
    .then((result) => cb(null, result))
    .catch((err) => cb(err));
};

module.exports = {
  login,
  register,
};
