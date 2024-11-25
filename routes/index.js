var express = require('express');  // Import the express library to handle routing and server functionality
var router = express.Router();  // Create a new router instance to define routes for the application

/* GET home page. */
// Define a GET route for the home page (root path)
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });  // Render the 'index' view and pass the title 'Express' to the template
});

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home' });  // This route duplicates the previous one, rendering the 'index' view with title 'Home'
});

router.get('/Assignment_Tracker', function (req, res, next) {
  res.render('Assignment_Tracker', { title: 'Assignment Tracker' });  // Define a GET route for the '/Assignment_Tracker' page and render the 'Assignment_Tracker' view with title 'Assignment Tracker'
});

module.exports = router;  // Export the router to be used in other parts of the application, such as in the main app.js file

