var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sukhmanbir | Home' });
});

/* GET about me page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'Sukhmanbir | About Me' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Sukhmanbir | Contact Me' });
});

module.exports = router;
