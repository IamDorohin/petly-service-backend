const { Schema, model } = require("mongoose");

const notices = Schema({
  title: { type: String },
  breed: { type: String },
  place: { type: String },
  age: { type: Number },
  category: {
    type: String,
    enum: ["sell", "lost-found", "for-free"],
    required: [true, "Category is required"],
  },
  sex: {
    type: String,
    enum: ["male", "female"],
    required: [true, "Sex is required"],
  },
});

// create a model
const Notices = model("notices", newsSchema);

module.exports = News;
