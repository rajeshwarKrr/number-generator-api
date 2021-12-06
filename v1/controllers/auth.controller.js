const bcrypt = require("bcryptjs");
const authServices = require("../services/auth.service");

const login = (req, res, next) => {
  const { email, password } = req.body;

  authServices.login({ email, password }, (err, result) => {
    if(err) {
      return next(err)
    }
    return res.status(200).send({
      message: "Success",
      data: result
    })
  })
}

const register = (req, res, next) => {
  const { password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);

  req.body.password = hashPassword;

  authServices.register(req.body, (err, result) => {
    if(err) {
      return next(err);
    }
    return res.status(200).send({
      message: "Success",
      data: result
    });
  });
}

module.exports= {
  login,
  register
}
