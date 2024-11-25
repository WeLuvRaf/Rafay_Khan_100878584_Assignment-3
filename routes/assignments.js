var express = require('express');
var Assignment = require('../models/Assignment');
var router = express.Router();

// POST: Create a new assignment
router.post('/', (req, res) => {
  const { title, description, dueDate } = req.body;
  const newAssignment = new Assignment({
    title,
    description,
    dueDate,
  });

  newAssignment.save()
    .then(() => res.redirect('/assignments'))  // Redirecting to the assignments list
    .catch((err) => console.log(err));
});

// GET: Display all assignments
router.get('/', (req, res) => {
  Assignment.find()
    .then((assignments) => {
      console.log(assignments); // Log the assignments to check if they are fetched
      res.render('assignment_tracker', { assignments });
    })
    .catch((err) => console.log(err));
});


// PUT: Update an existing assignment
router.post('/:id', (req, res) => {
  const { title, description, dueDate } = req.body;
  Assignment.findByIdAndUpdate(req.params.id, { title, description, dueDate })
    .then(() => res.redirect('/assignments'))  // Redirect after updating
    .catch(err => res.status(500).json({ error: err.message }));
});

// DELETE: Remove an assignment
router.post('/:id', (req, res) => {
  Assignment.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/assignments'))  // Redirect after deletion
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;
