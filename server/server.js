const router = require('express').Router();
// const bcrypt = require('bcrypt-as-promised');
const knex = require('../db');
const url = require('url');

//ROUTE:  Homepage
router.get('/', function (req, res) {
  // Send home.ejs file to the client
  res.render('/app.js');
});

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

// //AUTHENTICATE
// router.post('/profile', function (req, res) {
//   knex('users')
//     .where({email: req.body.email})
//     .first()
//     .then(function (user) {
//       if (!user) {
//         return res.sendStatus(401);
//       }
//       bcrypt.compare(req.body.password, user.hashed_password)
//         .then(function () {
//           res.render('site/profile');
//         })
//         .catch(function () {
//           res.sendStatus(401);
//         })
//     })
//     .catch(function () {
//       res.redirect('/login');
//     })
//
// });

//REQUIRE AUTH?
//ROUTE:  Profile
// router.get('/profile', function (req, res) {
//   // Send profile.ejs file to the client
//   if (req.session.user_id) { // CHECK IF LOGGED IN BEFORE RENDERING A PROFILE
//     res.render('/profile');
//   } else {
//     res.redirect('/signup');
//   }
// });

// router.get('/results', function (req, res) {
//   // Send profile.ejs file to the client
//   if (req.session.user_id) { // CHECK IF LOGGED IN BEFORE RENDERING A PROFILE
//     // Turn cookie urlencoded position into a query and parse using URL node module
//     // i.e. turn  lat=111.11111&long=77.77777
//     //      into ?lat=111.11111&long=77.77777 by prepending the ? symbol
//     // then parse using url.parse which sees the ? and knows it's a query
//     // returning
//     //  { lat: '111.11111', long: '77.77777' }
//     const positionQueryString = '?' + req.cookies.userPosition;
//     const position = url.parse(positionQueryString, true).query;

////////////////////////
//YELP LOGIC FOR QUERY AND RESULTS
// const yelp = require('yelp-fusion');
//
//
// const client = yelp.client(res.locals.token);

// client.search({
//   latitude: position.lat,
//   longitude: position.long,
//   sort_by: "rating",
//   categories: req.query.categories,
//   radius: "1500"
// }).then(response => {
//   console.log(response.jsonBody.businesses);
//   const businesses = response.jsonBody.businesses;
//   res.render('site/results', { businesses: businesses })
// }).catch(e => {
//   console.log(e);
// });
//
//   } else {
//     res.redirect('/signup');
//   }
// })


//filestack routes
//routes for instagram sandbox api
//routes for ny state graffiti api stats


module.exports = router;
