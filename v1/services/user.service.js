const User = require("../../models/user.model");

const profile = async ({ data }, cb) => {
  if (data.email === undefined) return cb({ message: "Email notFound" });

  const user = await User.findOne({ email: data.email });
  if (!user) return cb({ message: "Email Id Not found in DB" });

  return cb(null, {
    profile: { ...user.toJSON() },
  });
};

const nextNumber = async (email, cb) => {
  if (email === undefined) return cb({ message: "Email Not Found" });

  const user = await User.findOneAndUpdate(
    { email },
    { $inc: { currentNumber: 1 } },
    {
      new: true,
      runValidators: true,
    }
  );

  return cb(null, user.toJSON().currentNumber);
};

const currentNumber = async (email, cb) => {
  if (email === undefined) return cb({ message: "Email Not Found" });

  const user = await User.findOne({ email });
  return cb(null, user.toJSON().currentNumber);
};

const resetCurrent = async ({ email, payload: { current = 0 } }, cb) => {
  if (email === undefined) return cb({ message: "Email Not Found" });

  if (current < 0)
    return cb({ message: "Couldn't Reset, Reset Number is a negative number" });

  const user = await User.findOneAndUpdate(
    { email },
    { $set: { currentNumber: current } },
    {
      new: true,
      runValidators: true,
    }
  );
  return cb(null, user.toJSON().currentNumber);
};

module.exports = {
  profile,
  nextNumber,
  currentNumber,
  resetCurrent,
};
