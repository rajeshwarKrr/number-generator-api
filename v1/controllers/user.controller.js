const userServices = require("../services/user.service");

const profile = (req, res, next) => {
  const { user } = req;
  userServices.profile(user, (err, result) => {
    if (err) return next(err);

    return res.status(200).send({
      message: "Success",
      authorized: true,
      data: result,
    });
  });
};

const next = (req, res, next) => {
  const {
    user: {
      data: { email },
    },
  } = req;
  userServices.nextNumber(email, (err, result) => {
    if (err) return next(err);

    return res.status(200).send({
      message: "Success, Number Incremented by 1",
      authorized: true,
      number: result,
    });
  });
};

const current = (req, res, next) => {
  const {
    user: {
      data: { email },
    },
  } = req;
  userServices.currentNumber(email, (err, result) => {
    if (err) return next(err);

    return res.status(200).send({
      message: "Success, Current Number",
      authorized: true,
      number: result,
    });
  });
};

const resetCurrent = (req, res, next) => {
  const {
    user: {
      data: { email },
    },
  } = req;
  const { current } = req.body;
  userServices.resetCurrent({ email, payload: { current } }, (err, result) => {
    if (err) return next(err);

    return res.status(200).send({
      message: `Success, number Updated or Reset to  ${current}`,
      authorized: true,
      number: result,
    });
  });
};

module.exports = {
  profile,
  next,
  current,
  resetCurrent,
};
