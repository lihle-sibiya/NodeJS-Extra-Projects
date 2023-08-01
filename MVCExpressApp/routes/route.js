const express = require('express');
const router = express.Router();
const mealsController = require("../controllers/mealsController");

router.get('/menu', mealsController.getMenuController);

router.get('/', (req, res) => {
  res.send('Welcome to our restaurant!');
});

module.exports = router;
