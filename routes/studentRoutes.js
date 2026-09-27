const express = require('express');
const router = express.Router();
let students = require('../data/students');

// GET /students - Return all students
router.get('/', (req, res) => {
  res.status(200).json(students);
});

// GET /students/:id - Return a student by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.status(200).json(student);
});

// POST /students - Add a new student
router.post('/', (req, res) => {
  const { name, age, course } = req.body;

  if (!name || !age || !course) {
    return res.status(400).json({ message: "Missing required fields: name, age, course" });
  }

  const newId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;
  const newStudent = { id: newId, name, age, course };
  
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// PUT /students/:id - Update an existing student
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, age, course } = req.body;

  const studentIndex = students.findIndex(s => s.id === id);

  if (studentIndex === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  if (!name || !age || !course) {
    return res.status(400).json({ message: "Missing required fields: name, age, course" });
  }

  students[studentIndex] = { id, name, age, course };
  res.status(200).json(students[studentIndex]);
});

// DELETE /students/:id - Delete a student
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const studentIndex = students.findIndex(s => s.id === id);

  if (studentIndex === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  students.splice(studentIndex, 1);
  res.status(200).json({ message: "Student successfully deleted" });
});

module.exports = router;
