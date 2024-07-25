const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;

const barangScheme = new mongoose.Schema({
  judul: {
    type: String,
  },
  deskripsi: {
    type: String,
  },
  tgl: {
    type: String,
  },
  gambar: {
    type: String,
  },
});

module.exports = mongoose.model("berita", barangScheme);
