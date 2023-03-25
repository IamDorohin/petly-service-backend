const express = require("express");
// create route
const router = express.Router();
const {
  auth,
  upload,
  cloudinaryMiddleWar,
  validation,
  ctrlWrapper,
} = require("../../middleWares");
const { profile: ctrl } = require("../../controllers");
const { joiPetsSchema } = require("../../models/pets");

router.post(
  "/",
  auth,
  upload.single("petsImageUrl"),
  validation(joiPetsSchema),
  cloudinaryMiddleWar,
  ctrlWrapper(ctrl.addPet)
);
router.delete(
  "/:petId",
  auth,
  validation(joiPetsSchema),
  ctrlWrapper(ctrl.removePet)
);
router.get(
  "/",
  auth,
  validation(joiPetsSchema),
  ctrlWrapper(ctrl.showYourPets)
);

module.exports = router;
