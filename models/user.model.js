const mongoose = require("mongoose");
const { Schema } = mongoose;

const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  currentNumber: {
    type: Number,
    default: 0
  }
}, { timestamps: true })

UserSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.createdAt;
    delete returnedObject.updatedAt;
    //do not reveal passwordHash
    delete returnedObject.password;
  }
})

UserSchema.plugin(uniqueValidator, { message: "Email already in use." });

module.exports = mongoose.model("user", UserSchema);
