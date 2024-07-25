const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;

const barangScheme = new mongoose.Schema({
  nama_posyandu: {
    type: String,
  },
  jadwal_posyandu: {
    type: String,
  },
  lokasi: {
    type: String,
  },
  gambar: {
    type: String,
  },
});

module.exports = mongoose.model("posyandu", barangScheme);
