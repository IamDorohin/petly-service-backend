const { Pets } = require("../../models");

const showYourPets = async (req, res, next) => {

  const { _id: owner, email, name, birthday, city, phone  } = req.user;

  try {
    const list = await Pets.find({ owner });
    res.json({
      status: "success",
      code: 200,
      data: {
        yourPets: list,
        user:
          {
            name,
            email,
            birthday,
            phone,
            city,
          }
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = showYourPets;