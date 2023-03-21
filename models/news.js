const { Schema, model } = require('mongoose');
const Joi = require('joi');

const newsSchema = Schema({
    title: { type: String},
    url: { type: String},
    description: { type: String},
    date: { type: String },
}, { versionKey: false, timestamps: true })


const joiSchema = Joi.object({
    title: Joi.string(),
    url: Joi.string(),
    description: Joi.string(),
    date: Joi.string()
})


// create a model
const News = model("news", newsSchema);

module.exports = {
    joiSchema,
    News
}