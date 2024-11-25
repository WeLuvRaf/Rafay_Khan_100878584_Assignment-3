var express = require('express');
var router = express.Router();

// Route for Assignment Tracker page
router.get('/', (req, res) => {
  res.render('Assignment_Tracker'); // renders views/Assignment_Tracker.ejs
});

module.exports = router;
