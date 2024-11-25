var mongoose = require('mongoose');

var assignmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date, required: true },
  status: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' }
});

var Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;
