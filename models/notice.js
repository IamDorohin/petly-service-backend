const { Schema, model, Types, SchemaType } = require("mongoose");
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
      minLength: 6,
      maxLength: 48,
      text: true,
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
      type: String,
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

const joiAddNoticeSchema = Joi.object({
  title: Joi.string().min(6).max(48).required(),
  name: Joi.string().min(2).max(16).required(),
  birthdate: Joi.date(),
  breed: Joi.string().min(2).max(40).required(),
  location: Joi.string().min(3).required(),
  sex: Joi.string().valid("male", "female").required(),
  category: Joi.string().valid("sell", "for-free", "lost-found").required(),
  price: Joi.number().min(1),
  comments: Joi.string().min(8).max(120),
});

const Notice = model("notice", noticeSchema);

module.exports = { Notice, joiAddNoticeSchema };
