const express = require('express');
// create route
const router = express.Router();


const { news: ctrl } = require('../../controllers');
const { validation, ctrlWrapper } = require('../../middleWares')
const { joiSchema } = require('../../models/news');


router.get('/', validation(joiSchema), ctrlWrapper(ctrl.getNews));



module.exports = router;