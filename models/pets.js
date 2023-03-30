const { Schema, model } = require("mongoose");
const Joi = require("joi");

const petsSchema = Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 16,
    },
    birthdate: {
      type: Date,
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
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    petsImageUrl: {
      type: String,
      required: [true, "Photo is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

const joiPetsSchema = Joi.object({
  name: Joi.string().min(2).max(16).required(),
  birthdate: Joi.date().required(),
  breed: Joi.string().min(2).max(16).required(),
  comments: Joi.string().min(2).max(120).required(),
});

// create a model
const Pets = model("pets", petsSchema);

module.exports = {
  joiPetsSchema,
  Pets,
};
