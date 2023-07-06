const mongoose = require("mongoose");

const dishSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fName: {
    type: String,
    required: true,
  },
  mainImageUrl: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  shortDesc: {
    type: String,
    required: true,
  },
  pic1ImageUrl: {
    type: String,
    required: true,
  },
  pic2ImageUrl: {
    type: String,
    required: true,
  },
  pic3ImageUrl: {
    type: String,
    required: true,
  },
  pic4ImageUrl: {
    type: String,
    required: true,
  },
  pic5ImageUrl: {
    type: String,
    required: true,
  },
  howMade: {
    type: String,
    required: true,
  },
  howServe: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Dish", dishSchema);
