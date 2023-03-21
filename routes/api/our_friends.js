const express = require('express');

// create route
const router = express.Router();

const { our_friends: ctrl } = require('../../controllers');
const { validation, ctrlWrapper } = require('../../middleWares')
const { joiSchema } = require('../../models/our_friend');

router.get('/', validation(joiSchema), ctrlWrapper(ctrl.getListOfFriends));


module.exports = router;