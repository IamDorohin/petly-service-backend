const express = require('express');
// create route
const router = express.Router();
const { auth, upload, cloudinaryMiddlewar } = require("../../middlewares");


const { pets: ctrl } = require('../../controllers');
const { validation, ctrlWrapper } = require('../../middleWares')
const { joiPetsSchema } = require('../../models/pets');


router.post('/', auth, validation(joiPetsSchema), upload.single('file') , cloudinaryMiddlewar, ctrlWrapper(ctrl.addPet));
router.delete('/:petId', auth, validation(joiPetsSchema), ctrlWrapper(ctrl.removePet));
router.get('/', auth, validation(joiPetsSchema), ctrlWrapper(ctrl.showYourPets))



module.exports = router;