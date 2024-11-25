var createError = require('http-errors');  // Importing the package that helps create HTTP errors
var express = require('express');  // Importing Express.js to create the server and handle routes
var path = require('path');  // Path module helps resolve file paths
var cookieParser = require('cookie-parser');  // Middleware for parsing cookies (like checking the label on packages)
var logger = require('morgan');  // Logger for recording HTTP requests (think of it like a security camera recording traffic)
var expressLayouts = require('express-ejs-layouts');  // Middleware for supporting layouts in EJS templates (similar to setting a common theme for all pages)

var indexRouter = require('./routes/index');  // Import the router for the home page
var usersRouter = require('./routes/users');  // Import the router for user-related routes
var assignmentsRouter = require('./routes/assignments');  // Import the router for assignments-related routes
const methodOverride = require('method-override');  // Allows overriding HTTP methods (like adding extra controls to a car)

var app = express();  // Creating an Express application (like building the engine of a car)

// Use express-ejs-layouts to enable layouts in EJS views
app.use(expressLayouts);  // Enables the layout support (think of it as setting up the car’s exterior design)
app.set('layout', 'layout');  // Use 'layout.ejs' as the default template for the layout (like defining the car body type)

// Middleware for parsing data from forms and JSON requests (think of this like assembling the car's interior)
app.use(express.urlencoded({ extended: true }));  // Parses URL-encoded form data (like reading labels on packages)
app.use(express.json());  // Parses incoming JSON data (like receiving and understanding JSON requests)


// Set up the view engine (like deciding on the car's dashboard layout)
app.set('views', path.join(__dirname, 'views'));  // Set the directory for views
app.set('view engine', 'ejs');  // Set EJS as the view engine (think of it like deciding to use a particular app to design your dashboard)

// Middleware for logging requests (like a security camera capturing each interaction)
app.use(logger('dev'));  // Logs HTTP requests in development mode
app.use(express.json());  // Again parses incoming JSON (repetition for completeness)
app.use(express.urlencoded({ extended: false }));  // Parses URL-encoded data (think of this as installing a second system for backup)
app.use(cookieParser());  // Parses cookies (like reading labels on packages)
app.use(express.static(path.join(__dirname, 'public')));  // Serves static files (like making sure your garage door is open to show off the car)
app.use(methodOverride('_method'));  // Allow for overriding HTTP methods (like adding special controls to the car that are triggered by certain signals)

// Define routes for the app (think of these as different roads your car can take)
app.use('/', indexRouter);  // Home page route
app.use('/users', usersRouter);  // Users route
app.use('/assignments', assignmentsRouter);  // Assignments route

// Catch 404 errors (like a traffic cop redirecting lost cars)
app.use(function (req, res, next) {
    next(createError(404));  // Create a 404 error if a route is not found
});

// Error handler (like a mechanic fixing issues when the car breaks down)
app.use(function (err, req, res, next) {
    // Set locals, only providing error in development mode (like giving the mechanic detailed information for better repairs)
    res.locals.message = err.message;  // Error message to display
    res.locals.error = req.app.get('env') === 'development' ? err : {};  // Show full error details only in development

    // Render the error page (like presenting the report card of the car's health)
    res.status(err.status || 500);  // Set the status code (like a mechanic labeling the severity)
    res.render('error');  // Render the 'error' page with the error details
});

// Load environment variables from the .env file (like reading settings from a configuration book)
require('dotenv').config();  // Load environment variables (like setting up your car's key system)

// MongoDB setup
const mongoose = require('mongoose');  // Import mongoose to connect to MongoDB (think of it like the car’s fuel system)

// Connect to MongoDB using the URI from the .env file (like starting the engine using a secret key)
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,  // Ensures the new connection string parser is used (like updating the car's GPS system)
  useUnifiedTopology: true  // Ensures the latest version of MongoDB features is used (like using the newest model of the car)
})
  .then(() => console.log('MongoDB connected...'))  // Log success message when connected (like the car engine starting smoothly)
  .catch(err => console.log(err));  // Log an error if the connection fails (like the engine sputtering or failing to start)

module.exports = app;  // Export the app so it can be used elsewhere (like sending your car out into the world to drive)

