// taskModel.js
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  // Add more fields as needed
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
