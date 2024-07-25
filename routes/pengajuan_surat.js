const router = require("express").Router();
const barangController = require("../controller/pengajuan_surat");

const utilApps = require("../utils/utils_apps");
const multer = require("multer");
const barangModels = require("../models/pengajuan_surat");
const { isObjectIdOrHexString } = require("mongoose");
const uploadFile = multer({
  storage: utilApps.uploadFile,
}).single("gambar");

router.post("/input", uploadFile, (req, res) => {
  let newBody = JSON.parse(req.body.data);
  if (req.file === undefined) {
    res.json({
      status: false,
      msg: "Data tidak boleh kosong",
    });
  } else {
    req.body.gambar = req.file.filename;
    newBody.gambar = req.body.gambar;
  }
  barangController
    .input(newBody)
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
});

router.post("/inputdata", (req, res) => {
  barangController
    .input(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/get-all-barang", (req, res) => {
  barangController
    .getAllBarang()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/get-barang-by-id/:nik", (req, res) => {
  console.log(req.params.nik);
  barangController
    .getBarangById(req.params.nik)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/get-id/:id", (req, res) => {
  console.log(req.params.id);
  barangController
    .getId(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/update/:idBarang", uploadFile, (req, res) => {
  let newBody = JSON.parse(req.body.data);
  let gambar = utilApps.cekNull(req.file);
  if (gambar !== null) {
    newBody.file = gambar;
  }
  console.log(gambar);
  console.log(newBody);
  barangController
    .update(req.params.idBarang, newBody)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete("/delete/:idBarang", (req, res) => {
  barangController
    .delete(req.params.idBarang)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
