const express = require("express");
const router = express.Router();

const { notices: ctrl } = require("../../controllers");
const { validation, ctrlWrapper } = require("../../middleWares");

router.get("/:search", ctrlWrapper(ctrl));
router.get("categoris/:category", ctrlWrapper(ctrl));

module.exports = router;
