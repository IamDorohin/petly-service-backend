const { User } = require('../../models');

const updateInfoAboutUser = async (req, res) => {
    const {id } = req.user;
    const result = await User.findByIdAndUpdate(id, { ...req.body, photo: req.fileUrl  }, {new: true});  
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
