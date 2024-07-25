const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;

const barangScheme = new mongoose.Schema({
  nik: {
    type: String,
  },
  nama_lengkap: {
    type: String,
  },
  alamat_lengkap: {
    type: String,
  },
  jenis_kelamin: {
    type: String,
  },
  tempat_lahir: {
    type: String,
  },
  tanggal_lahir: {
    type: String,
  },
  agama: {
    type: String,
  },
  status_perkawinan: {
    type: String,
  },
  jenis_surat: {
    type: String,
  },
  tanggal_pengajuan: {
    type: String,
  },
  status_pengajuan: {
    type: String,
  },
  file: {
    type: String,
  },
});

module.exports = mongoose.model("pengajuan_surat", barangScheme);
