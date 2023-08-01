const express = require('express');
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/restaurant_menu", { useNewUrlParser: true, useUnifiedTopology: true });
const bootstrap = require('./routes/bootstrap');

const app = new express();
const pug = require('pug');
app.set('view engine', 'pug');

bootstrap(index, router);
app.use(express.static('public'));


db.once("open", () => {
    console.log("Successfully connected to MongoDB");
  });



  app.listen(4000, () => {
    console.log('App listening on port 4000')
})