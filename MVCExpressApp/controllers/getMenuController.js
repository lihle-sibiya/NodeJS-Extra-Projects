const Meal = require('../models/mealModel');

exports.getMeals = async (req, res) => {
    try {
        const meals = await Meal.find();
        res.render('menu', { meals });
    } catch (err) {
        console.error('Error fetching meals:', err);
        res.status(500).send('Internal Server Error');
    }
};