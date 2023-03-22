const { Pets } = require("../../models");

const addPet = async(req, res) =>{
    const { body } = req;
    const fileUrl = await Pets.url(body)

    const newPet = await Pets.create({
        name,
        date,
        breed,
        comments,
        fileUrl
    });

    res.json({
        status: "success",
        code: 201,
        data:{
            petList: newPet,
            fileUrl: newPet.fileUrl,
        },
    });
};

module.exports = addPet;