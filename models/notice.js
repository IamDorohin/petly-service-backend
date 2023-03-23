const { Schema, model } = require("mongoose");
const Joi = require("joi");

const noticeSchema = Schema(
  {
    category: {
      type: String,
      enum: ["sell", "lost-found", "for-free"],
      required: [true, "Category is required"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
      minLength: 2,
      maxLength: 48,
    },
    name: {
      type: String,
      minLength: 2,
      maxLength: 16,
    },
    birthdate: { type: Date },
    breed: {
      type: String,
      minLength: 2,
      maxLength: 40,
    },
    sex: {
      type: String,
      enum: ["male", "female"],
      required: [true, "Sex is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    comments: {
      type: String,
      minLength: 8,
      maxLength: 120,
    },
    imgUrl: {
      type: String,
      required: [true, "Photo is required"],
    },
    price: {
      type: Number,
      min: 1,
    },
    price: {
      type: Number,
      min: 1,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

// const joiRegisterSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().required(),
//   password: Joi.string().min(8).required(),
//   city_region: Joi.string().required(),
//   mobile_phone: Joi.string().min(10).required(),
// });

// create a model
const Notice = model("notice", noticeSchema);

module.exports = { Notice };
