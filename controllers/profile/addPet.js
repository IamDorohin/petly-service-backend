const { Pets } = require("../../models");
const fs = require("fs/promises");
const cloudinary = require("cloudinary").v2;

const addPet = async (req, res) => {
    const { filename, format, path, url } = req.file;
    const { _id: owner } = req.user;

    const petsImageUrl = cloudinary.url(filename + "." + format, {
        transformation: {
            width: 336,
            height: 336,
            gravity: "face",
            crop: "fill",
        },
    });

    fs.unlink(path);

    const newPet = await Pets.create({...req.body, petsImageUrl, owner});

    res.json({
        status: "success",
        code: 201,
        data:{
            petList: newPet,
        },
    });
};

module.exports = addPet;