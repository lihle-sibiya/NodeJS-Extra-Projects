const mongoose = require("mongoose");
const Meal = require("./models/mealModel");

mongoose.connect("mongodb://127.0.0.1:27017/restaurant_menu", { useNewUrlParser: true, useUnifiedTopology: true });

const meals = [
  { name: "MilkShake", type: "breakfast", price: 8, image: "menu-1.jpg", description: "Delicious milkshake made with fresh ingredients." },
  { name: "Lasagna", type: "lunch", price: 20, image: "menu-2.jpg", description: "Classic lasagna with layers of pasta, meat, and cheese." },
  { name: 'Chicken Burger', type: "lunch", price: 115, image: "menu-3.jpg", description: "Tasty chicken burger with a side of fries." },
  { name: 'Fish and chips', type: "dinner", price: 120, image: "menu-4.jpg", description: "Traditional fish and chips served with tartar sauce." },
  { name: 'Pasta', type: "dinner", price: 100, image: "menu-5.jpg", description: "Italian pasta with a choice of sauce and toppings." },
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