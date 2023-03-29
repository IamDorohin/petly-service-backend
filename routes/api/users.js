const express = require("express");
const {
  auth,
  ctrlWrapper,
  validation,
  upload,
  cloudinaryMiddleWar,
} = require("../../middleWares");
const router = express.Router();
const { users: ctrl } = require("../../controllers");
const { joiUserProfileSchema } = require("../../models/user");

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));
router.put(
  "/current/update",
  auth,
  upload.single("photo"),
  validation(joiUserProfileSchema),
  cloudinaryMiddleWar,
  ctrlWrapper(ctrl.updateInfoAboutUser)
);

module.exports = router;
