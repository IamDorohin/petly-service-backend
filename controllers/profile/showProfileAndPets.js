const { Pets } = require("../../models");

const showProfileAndPets = async (req, res, next) => {
  const {
    _id: owner,
    email,
    name,
    birthday,
    city,
    phone,
    photo = "",
  } = req.user;

  try {
    const list = await Pets.find({ owner });
    res.json({
      status: "success",
      code: 200,
      data: {
        yourPets: list,
        user: {
          name,
          email,
          birthday,
          phone,
          city,
          photo,
        },
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = showProfileAndPets;
