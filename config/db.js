require('dotenv').config();  // Load environment variables from .env

var mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI, {
  useCreateIndex: true,  // Add this option to avoid warnings
})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('Error connecting to MongoDB:', err));



