const express = require("express");
const router = express.Router();
const upload = require("../middlewares/uploadMiddleware");
const { uploadImage } = require("../controllers/fileController");

router.post("/upload-image", upload.single('file'), uploadImage);

module.exports = router;
