const express = require('express');
// create route
const router = express.Router();

const { news: ctrl } = require('../../controllers');
const {validation, ctrlWrapper} = require("../../middleWares")

router.get('/', ctrlWrapper(ctrl.getNews));



module.exports = router;