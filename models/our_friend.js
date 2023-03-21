const { Schema, model } = require('mongoose');
const Joi = require('joi');

const ourFriendSchema = Schema({
title: { type: String } ,
url: { type: String },
addressUrl:{ type: String },
imageUrl:{ type: String },
address:{ type: String },
phone: { type: String },
email: { type: Number},
workDays: {type: Array}
}, { versionKey: false, timestamps: true })


const joiSchema = Joi.object({
    title: Joi.string(),
    url: Joi.string(),
    addressUrl: Joi.string(),
    imageUrl: Joi.string(),
    address: Joi.string(),
    phone:Joi.string(),
    email: Joi.string(),
   workDays:Joi.array()
    
    
})


// create a model
const OurFriend = model("our_friend", ourFriendSchema);

module.exports = {
    joiSchema,
    OurFriend
}