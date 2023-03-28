const { User } = require('../../models');
const fs = require("fs/promises");
const cloudinary = require("cloudinary").v2;

const updateInfoAboutUser = async (req, res) => {
  const { id, photo } = req.user;
  
  let photoUrl = '';
  
  
  if (!req.file) {
    photoUrl = photo;
  }

  else if (req.file) {
const { filename, format, path } = req.file;
      photoUrl = cloudinary.url(filename + "." + format, {
    transformation: {
      width: 225,
      height: 225,
      gravity: "face",
      crop: "fill",
    },
  });

  fs.unlink(path);
}

  
  const result = await User.findByIdAndUpdate(id, {
    ...req.body,
    photo: photoUrl
  }, { new: true });  
    if (!result) {
      const error = new Error(`User with id=${id} not found`);
      error.status = 404;
      throw error;
  }
   
    res.status(201).json({
    status: "success",
      code: 201,
      data: {result},
    })
}

module.exports = updateInfoAboutUser;