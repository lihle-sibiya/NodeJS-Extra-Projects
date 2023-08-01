const mongoose = require("mongoose"),
    { Schema } = require("mongoose");

let getMealsSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        type: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            default: 0,
            min: [0, "Meal cannot have a negative cost"]
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("getMeals", getMealsSchema);