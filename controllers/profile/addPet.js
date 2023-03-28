const { Pets } = require("../../models");
const fs = require("fs/promises");
const cloudinary = require("cloudinary").v2;

const addPet = async (req, res) => {

   const { _id: owner } = req.user;
    let petsImageUrl = '';

    if (!req.file) {
        petsImageUrl = 'https://img.favpng.com/24/18/11/dog-puppy-abstraction-png-favpng-iQBDxcgxFhRfXVPtwCwv0THcN.jpg';
    }

    else if (req.file) {
        const { filename, format, path, url } = req.file;
        petsImageUrl = cloudinary.url(filename + "." + format, {
            transformation: {
                width: 240,
                height: 240,
                gravity: "face",
                crop: "fill",
            },
        });
    
        fs.unlink(path);
    }


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