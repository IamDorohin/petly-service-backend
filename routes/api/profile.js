const express = require('express');
// create route
const router = express.Router();
const { auth, upload, cloudinaryMiddlewar, validation, ctrlWrapper } = require("../../middlewares");
const { profile: ctrl } = require('../../controllers');
const { joiPetsSchema } = require('../../models/pets');


router.post('/', auth, upload.single('file'), validation(joiPetsSchema), cloudinaryMiddlewar, ctrlWrapper(ctrl.addPet));
router.delete('/:petId', auth, validation(joiPetsSchema), ctrlWrapper(ctrl.removePet));
router.get('/', auth, validation(joiPetsSchema), ctrlWrapper(ctrl.showYourPets))
router.get('/ownerInfo', auth, ctrlWrapper(ctrl.showOwnerInfo))

module.exports = router;