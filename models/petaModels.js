const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;

const barangScheme = new mongoose.Schema({
  namaPembangunan: {
    type: String,
  },
  luas: {
    type: String,
  },
  alamat: {
    type: String,
  },
  deskripsi: {
    type: String,
  },
  gambar: {
    type: String,
  },
  status: {
    type: String,
  },
});

module.exports = mongoose.model("pembangunan", barangScheme);
