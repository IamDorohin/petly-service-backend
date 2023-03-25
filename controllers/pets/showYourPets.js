const { Pets } = require("../../models");

const showYourPets = async (req, res) => {
  try {
    const list = await Pets.find();
    res.json({
      status: "success",
      code: 200,
      data: {
        contacts: list,
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