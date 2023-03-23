const express = require('express');
const { auth, ctrlWrapper, validation, upload, cloudinaryMiddleWar } = require('../../middleWares')
const router = express.Router();
const { users: ctrl } = require('../../controllers');
const { joiUserProfileSchema } = require('../../models/user');



router.get('/current', auth, ctrlWrapper(ctrl.getCurrent));
router.put('/current/update', validation(joiUserProfileSchema), auth, upload.single('photo'), cloudinaryMiddleWar,  ctrlWrapper(ctrl.updateInfoAboutUser));

module.exports = router; 