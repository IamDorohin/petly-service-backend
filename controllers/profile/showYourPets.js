const { Pets } = require("../../models");

const showYourPets = async (req, res, next) => {

  const { _id: owner } = req.user;

  try {
    const list = await Pets.find({ _id: owner }).populate("pets");
    res.json({
      status: "success",
      code: 200,
      data: {
        yourPets: list,
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