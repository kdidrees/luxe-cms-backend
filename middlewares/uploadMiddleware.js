const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images'); // Directory to store images
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage }).any(); // Use .any() to handle multiple files

const uploadMiddleware = (req, res, next) => {
  const components = req.body.components ? JSON.parse(req.body.components) : [];
  const fields = components
    .filter((comp) => comp.data?.image) // Only components with image data
    .map((comp) => ({ name: `image-${comp.id}`, maxCount: 1 }));

  const uploadHandler = upload.fields(fields);
  uploadHandler(req, res, next);
};

module.exports = uploadMiddleware;
