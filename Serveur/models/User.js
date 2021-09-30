const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 0,
        max: 255,
      },
  email: {
    type: String,
    required: true,
    min: 8,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 1024,
  },
  role: {
    type: String,
    default: "USER",
  },
});

module.exports = mongoose.model("User", userSchema);