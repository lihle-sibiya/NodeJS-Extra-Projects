const mongoose = require("mongoose");
const Meal = require("./models/mealModel");

mongoose.connect("mongodb://127.0.0.1:27017/restaurant_menu", { useNewUrlParser: true, useUnifiedTopology: true });

const meals = [
    { name: "MilkShake", type: "breakfast", price: 8 },
    { name: "Lazanya", type: "lunch", price: 20 },
];

const seedMeals = async () => {
    try {
      
      const insertedMeals = await Meal.insertMany(meals);// Insert the new meals
  
      console.log("Meals seeded successfully:", insertedMeals);
    } catch (err) {
      console.error("Error seeding meals:", err);
    } finally {
     
      mongoose.connection.close(); // Close the database connection after seeding
    }
  };

  seedMeals();