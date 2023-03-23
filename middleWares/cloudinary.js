const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const options = {
  use_filename: true,
  unique_filename: false,
  overwrite: true,
};

const cloudinaryMiddleWar = async (req, res, next) => {
  if (req.file) {
    const upload = await cloudinary.uploader.upload(req.file.path, options);
    req.file.url = upload.secure_url;
    req.file.format = upload.format;
  }

  next();
};

module.exports = cloudinaryMiddleWar;
