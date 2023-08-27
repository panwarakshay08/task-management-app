// routes/tasks.js
const express = require("express");
const router = express.Router();
const Task = require("../models/taskModel");

// Create a new task
router.post("/", async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: "Error creating task" });
  }
});

// Define other routes for reading, updating, and deleting tasks
// ...

module.exports = router;
