var mongoose = require('mongoose');  // Import the mongoose library to interact with MongoDB

// Define a schema for the 'Assignment' collection in MongoDB
var assignmentSchema = new mongoose.Schema({
  title: { type: String, required: true },  // 'title' is a required string field
  description: { type: String, required: true },  // 'description' is a required string field
  dueDate: { type: Date, required: true },  // 'dueDate' is a required date field
  status: { 
    type: String,  // 'status' is a string field
    enum: ['Pending', 'Completed'],  // It can only have one of the two values: 'Pending' or 'Completed'
    default: 'Pending'  // Default value is 'Pending' if no value is provided
  }
});

// Create a model named 'Assignment' based on the schema
var Assignment = mongoose.model('Assignment', assignmentSchema);

// Export the Assignment model so it can be used in other parts of the application
module.exports = Assignment;
