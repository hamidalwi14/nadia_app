const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;

const barangScheme = new mongoose.Schema({
  nik: {
    type: String,
  },
  judul_pengaduan: {
    type: String,
  },
  deskripsi: {
    type: String,
  },
  alamat: {
    type: String,
  },
  no_hp: {
    type: String,
  },
  nama: {
    type: String,
  },
  tgl: {
    type: String,
  },
  status: {
    type: String,
  },
  gambar: {
    type: String,
  },
});

module.exports = mongoose.model("pengaduan", barangScheme);
