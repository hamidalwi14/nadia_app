const mongoose = require("mongoose");

const userModel = mongoose.Schema({
  nik: {
    type: String,
  },
  namaLengkap: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  role: {
    type: String,
  },
});

module.exports = mongoose.model("users", userModel);
