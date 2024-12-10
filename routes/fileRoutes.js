const express = require("express");
const router = express.Router();
const upload = require("../middlewares/uploadMiddleware");
const { uploadImageToCloudinary } = require("../utils/cloudinary");

router.post("/upload-image", upload.single('file'), uploadImageToCloudinary);

module.exports = router;
