const express = require("express");
const router = express.Router();

const { notices: ctrl } = require("../../controllers");
const {
  validation,
  ctrlWrapper,
  upload,
  cloudinaryMiddleWar,
} = require("../../middleWares");
const uploader = require("../../middleWares/upload");

router.get("/:search", ctrlWrapper(ctrl));

// router.put("/", upload.single("img"), cloudinaryMiddleWar, ctrlWrapper(ctrl));

module.exports = router;
