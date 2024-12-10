const CustomError = require("./customError");

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImageToCloudinary = async (fileBuffer) => {
  try {
    const result = await cloudinary.uploader.upload(fileBuffer, {
      resource_type: "auto",
    });

    return result.secure_url;
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    throw new CustomError(500, "Failed to upload image to Cloudinary");
  }
};

module.exports = { uploadImageToCloudinary };
