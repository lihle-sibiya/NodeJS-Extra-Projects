const express = require('express');
const mongoose = require('mongoose');
const bootstrap = require('./bootstrap.js');

mongoose.connect("mongodb://127.0.0.1:27017/restaurant_menu", { useNewUrlParser: true, useUnifiedTopology: true });

const app = new express();
const router = express.Router();

app.set('view engine', 'ejs');

const path = require('path');
app.set('views', path.resolve('./views'));


bootstrap(app);
app.use('/', router); 
app.use(express.static('public'));

const db = mongoose.connection;
db.once("open", () => {
    console.log("Successfully connected to MongoDB");
  });



  app.listen(4000, () => {
    console.log('App listening on port 4000')
})