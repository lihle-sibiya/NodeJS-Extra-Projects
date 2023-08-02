const express = require('express');
const router = express.Router();
const mealsController = require('../controllers/mealsController');

router.get('/menu', async (req, res) => {
  const meals = await mealsController.getMeals();
  res.render('menu', { meals });
});

router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;