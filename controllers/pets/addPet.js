const { Pets } = require("../../models");

const addPet = async(req, res) =>{
    const { body, fileUrl } = req;

    const newPet = await Pets.create({...body, petPhotoURL: fileUrl});

    res.json({
        status: "success",
        code: 201,
        data:{
            petList: newPet,
        },
    });
};

module.exports = addPet;