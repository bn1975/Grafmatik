var express = require('express');
var app = express();

const router = require('express').Router();
// const bcrypt = require('bcrypt-as-promised');
// const knex = require('../db');
const url = require('url');

app.use(express.static(__dirname +'./../../')); //serves the index.html
app.listen(8000); //listens on port 8000 -> http://localhost:8000/



//ROUTE:  Homepage
router.get('/', function (req, res) {
  res.render('/app.js');
});

//get image metadata from filestack
router.get('user/feed')

//post image metadata to local database
router.post('/user/feed')






//ROUTE:  About
router.get('/about', function (req, res) {
  // Send login.ejs file to the client
  res.render('components/about');
});

//ROUTE:  Contact
router.get('/contact', function (req, res) {
  // Send home.ejs file to the client
  res.render('components/signup');
});

//ROUTE:  Login
router.get('/login', function (req, res) {
  // Send login.ejs file to the client
  res.render('components/login');
});

//ROUTE:  Signup
router.get('/signup', function (req, res) {
  // Send login.ejs file to the client
  res.render('components/signup');
});

// //ROUTE:  Logout
router.get('/logout', function (req, res) {
  // Send home.ejs file to the client
  req.session = null; // This deletes cookie data
  res.render('site/logout');
});

//ROUTE:  Map
router.get('/user/map', function (req, res) {
  // Send login.ejs file to the client
  res.render('components/signup');
});

//ROUTE:  Feed
router.get('/user/feed', function (req, res) {
  // Send login.ejs file to the client
  res.render('components/signup');
});

////////
//nyc graffti api
//filestack - details, filters, gallery, pic id
//instagram - oauth
