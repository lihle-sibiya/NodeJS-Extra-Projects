const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const mealSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
    min: [0, "Meal cannot have a negative cost"],
  },
  image: {
    type: String,
    required: true,
  },
});

const Meal = mongoose.model("Meal", mealSchema);

module.exports = Meal;

