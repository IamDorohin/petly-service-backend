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
    favorite: [
      {
        type: Schema.ObjectId,
        ref: "notice",
      },
    ],
    city: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    birthday: {
      type: String,
    },
    photo: {
      type: String,
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

const joiRegisterSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  city: Joi.string().required(),
  phone: Joi.string().min(10).required(),
});

const joiLoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

const joiUserProfileSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().email(),
  city: Joi.string(),
  phone: Joi.string().min(10),
  birthday: Joi.string(),
  photo: Joi.object(),
});

const User = model("user", userSchema);

module.exports = {
  User,
  joiRegisterSchema,
  joiLoginSchema,
  joiUserProfileSchema,
};
