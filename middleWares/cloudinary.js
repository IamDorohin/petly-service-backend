const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const cloudinaryMiddleWar = async (req, res, next) => {
  req.fileUrl = "";

  if (req.file) {
    const upload = await cloudinary.uploader.upload(req.file.path);
    req.fileUrl = upload.secure_url;
  }

  next();
};

module.exports = cloudinaryMiddleWar;
