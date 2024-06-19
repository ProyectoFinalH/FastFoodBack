const parser = require('../../config/multerConfig'); // Asegúrate de que la ruta sea correcta

const uploadImage = (req, res) => {
  console.log("entre al upload image");
  console.log(req);
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  // La URL de la imagen subida está en req.file.path
  res.status(200).json({
    message: 'Image uploaded successfully',
    imageUrl: req.file.path
  });
};

module.exports = {
  uploadImage,
};
