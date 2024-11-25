require('dotenv').config();  // Load environment variables from a .env file to access sensitive data like database URI

var mongoose = require('mongoose');  // Import the mongoose library to interact with MongoDB

// Establish a connection to MongoDB using the connection string stored in an environment variable
mongoose.connect(process.env.DB_URI, {
  useCreateIndex: true,  // Option to prevent deprecation warnings related to index creation (this is optional but recommended)
})
  .then(() => console.log('MongoDB connected...'))  // Log a success message once the connection is established
  .catch(err => console.log('Error connecting to MongoDB:', err));  // Log an error message if the connection fails
