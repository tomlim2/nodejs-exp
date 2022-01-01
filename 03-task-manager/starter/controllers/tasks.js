const Task = require('../models/Task');
const getAllTasks = (req, res) => {
  console.log(req);
  res.send('get all tasks');
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  console.log(req);
  res.status(201).json({ task });
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send('update task');
};

const deleteTask = (req, res) => {
  res.send('delete task');
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
