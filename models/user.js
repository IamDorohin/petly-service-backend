const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlenght: 8,
    },
    city_region: {
      type: String,
      required: true,
    },
    mobile_phone: {
      type: String,
      required: true,
    },
    favorite: [
      {
        type: Schema.ObjectId,
        ref: "notice",
      },
    ],
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

const joiRegisterSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().min(8).required(),
  city_region: Joi.string().required(),
  mobile_phone: Joi.string().min(10).required(),
});

const joiLoginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(8).required(),
});

const User = model("user", userSchema);

module.exports = {
  User,
  joiRegisterSchema,
  joiLoginSchema,
};
