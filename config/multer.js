const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinary');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'menuitems',
    format: async (req, file) => 'png', // supports promises as well
    public_id: (req, file) => file.originalname.split('.')[0],
  },
});

const parser = multer({ storage: storage });

module.exports = parser;
