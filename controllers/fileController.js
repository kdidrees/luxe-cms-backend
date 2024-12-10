const uploadImageToCloudinary = require('../utils/cloudinary');
const uploadImage = async (req, res) => {

  console.log('file kd', req.file)
  
  if (!req.file) {
    return res.status(400).json({
      message: 'No file uploaded',
    });
  }

  try {
    const imageUrl = await uploadImageToCloudinary(req.file.buffer);

    // Send the Cloudinary URL in the response
    return res.status(200).json({
      message: 'Image uploaded successfully',
      imageUrl: imageUrl,
    });
  } catch (error) {
    console.error('Error during image upload:', error);
    return res.status(500).json({
      message: 'Failed to upload image',
      error: error.message,
    });
  }
};

module.exports = { uploadImage };
