const express = require("express");
const router = express.Router();
const upload = require("../middlewares/uploadMiddleware");
const { uploadImageToCloudinary } = require("../utils/cloudinary");

router.post("/upload-image", upload, uploadImageToCloudinary);

module.exports = router;
