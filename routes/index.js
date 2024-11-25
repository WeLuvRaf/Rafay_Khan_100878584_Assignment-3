var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/Assignment_Tracker', function (req, res, next) {
  res.render('Assignment_Tracker', { title: 'Assignment Tracker' });
});

module.exports = router;
