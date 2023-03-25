// const { Notice } = require("../../models");
// const fs = require("fs/promises");
// const cloudinary = require("cloudinary").v2;

// const addNewNotice = async (req, res) => {
//   const { filename, format, path, url } = req.file;
//   const { _id: owner } = req.user;

//   const imgUrl = cloudinary.url(filename + "." + format, {
//     transformation: {
//       width: 336,
//       height: 336,
//       gravity: "face",
//       crop: "fill",
//     },
//   });

//   fs.unlink(path);

//   const newNotice = await Notice.create({ ...req.body, imgUrl, owner });

//   res.status(201).json({
//     status: "success",
//     code: 201,
//     message: "Notice has been successfully added",
//     data: {
//       newNotice,
//     },
//   });
// };

// module.exports = addNewNotice;




const { Notice } = require("../../models");
const fs = require("fs/promises");
const cloudinary = require("cloudinary").v2;

const addNewNotice = async (req, res) => {
  
  const { _id: owner } = req.user;
  let imgUrl = '';

 if (!req.file) {
    imgUrl = 'default/url';
  }

 else if (req.file) {
   const { filename, format, path, url } = req.file;
    imgUrl = cloudinary.url(filename + "." + format, {
    transformation: {
      width: 336,
      height: 336,
      gravity: "face",
      crop: "fill",
    },
  });

  fs.unlink(path);
  }
 

  const newNotice = await Notice.create({ ...req.body, imgUrl, owner });

  res.status(201).json({
    status: "success",
    code: 201,
    message: "Notice has been successfully added",
    data: {
      newNotice,
    },
  });
};

module.exports = addNewNotice;
