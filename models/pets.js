const { Schema, model } = require('mongoose');
const Joi = require('joi');

const petsSchema = Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 16,
    },
    date: {
        type: String,
    },
    breed: {
        type: String,
        minlength: 2,
        maxlength: 16,
    },
    comments: {
        type: String,
        minlength: 8,
        maxlength: 120,
    },
    fileUrl: { type: String },
},
{ versionKey: false, timestamps: true })


const joiPetsSchema = Joi.object({
    name: Joi.string().min(2).max(16),
    date: Joi.string(),
    breed: Joi.string().min(2).max(16),
    comments: Joi.string().min(2).max(120),
    imageURL: Joi.string(),
})


// create a model
const Pets = model("pets", petsSchema);

module.exports = {
    joiPetsSchema,
    Pets
}