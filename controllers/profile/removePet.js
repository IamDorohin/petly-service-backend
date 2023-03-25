const { Pets } = require("../../models");

const removePet = async(req, res) =>{
  try {
    const { petId } = req.params;
    const list = await Pets.findByIdAndRemove(petId);

    if (list) {
      res.json({
        status: "success",
        code: 200,
        petList: list,
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Adv ${petId} can not be deleted `,
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: "Not found",
    });
  }
};

module.exports = removePet;