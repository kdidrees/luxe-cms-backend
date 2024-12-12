const { uploadImageToCloudinary } = require("../utils/cloudinary");
const CustomError = require("../utils/customError");

const uploadImage = async (req, res, next) => {
  try {
    // Check if files are uploaded
    if (!req.files || req.files.length === 0) {
      throw new CustomError(400, "No files uploaded");
    }

    const uploadedImages = [];
    for (const file of req.files) {
      const imageUrl = await uploadImageToCloudinary(file.buffer); 
      uploadedImages.push(imageUrl);
    }

    res.status(200).json({
      message: "Images uploaded successfully",
      images: uploadedImages,
    });
  } catch (error) {
    console.error("Error uploading images:", error);
    res.status(error.statusCode || 500).json({
      message: error.message || "Failed to upload images",
    });
  }
};

module.exports = { uploadImage };


module.exports = { uploadImage };
