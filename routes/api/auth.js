const express = require('express');
const router = express.Router();
const { validation, ctrlWrapper, auth } = require('../../middleWares')
const { auth: ctrl } = require('../../controllers');
const { joiLoginSchema, joiRegisterSchema } = require('../../models/user');

router.post('/register', validation(joiRegisterSchema), ctrlWrapper(ctrl.register));
router.post('/login', validation(joiLoginSchema), ctrlWrapper(ctrl.login));
router.get('/logout', auth,  ctrlWrapper(ctrl.logout));


module.exports = router; 