const { Schema, model } = require("mongoose");
const Joi = require("joi");

const noticesSchema = Schema({
  category: {
    type: String,
    enum: ["sell", "lost-found", "for-free"],
    required: [true, "Category is required"],
  },
  title: { type: String, required: [true, "Category is required"] },
  name: { type: String },
  birthdate: { type: Date },
  breed: { type: String },
  sex: {
    type: String,
    enum: ["male", "female"],
    required: [true, "Sex is required"],
  },
  location: { type: String, required: [true, "Category is required"] },
  coments: { type: String },
  imgUrl: { type: String },
  price: { type: Number },
});

// const joiRegisterSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().required(),
//   password: Joi.string().min(8).required(),
//   city_region: Joi.string().required(),
//   mobile_phone: Joi.string().min(10).required(),
// });

// create a model
const Notices = model("notices", noticesSchema);

module.exports = Notices;
