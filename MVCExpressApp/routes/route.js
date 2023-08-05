const express = require('express');
const path = require('path');
const router = express.Router();
const mealsController = require('../controllers/mealsController');
const menuController = require('../controllers/getMenuController');

//  capitalizeFirstLetter function
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

router.get('/', async (req, res) => {
  try {
    const meals = await mealsController.getMeals();
    //res.render('index', { meals }); // Pass the meals data to the index.ejs view
    res.sendFile(path.join(__dirname, '../public/html/index.html'));
  } catch (err) {
    console.error('Error fetching meals:', err);
    res.status(500).send('Internal Server Error');
  }
});

//router.get('/menu', menuController.getMeals);

router.get('/menu', async (req, res) => {
  try {
    const menuItems = await menuController.getMenuItems();
    res.render('menu', { menuItems, capitalizeFirstLetter }); // Pass the menuItems data and the function to the menu.ejs view
  } catch (err) {
    console.error('Error fetching menu items:', err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;