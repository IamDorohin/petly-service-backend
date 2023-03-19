const express = require('express');

// create route
const router = express.Router();

const { our_friends: ctrl } = require('../../controllers');
const {validation, ctrlWrapper} = require("../../middleWares")

router.get('/', ctrlWrapper(ctrl.getListOfFriends));


module.exports = router;