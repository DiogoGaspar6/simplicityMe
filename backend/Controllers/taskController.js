const taskModel = require('../models/taskModel');

const create = (req, res) => {
  const task = req.body;
  if (!task.title || !task.status || !task.user_id) {
    return res.status(400).json({ message: 'Please provide all required fields (title, status, user_id)' });
  }
  taskModel.create(task, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error creating task', err });
    return res.status(201).json({ message: 'Task created successfully' });
  });
};

const list = (req, res) => {
  taskModel.list((err, result) => {
    if (err) return res.status(500).json({ message: 'Error listing tasks', err });
    return res.status(200).json(result);
  });
};

const listOne = (req, res) => {
  const { id } = req.params;
  taskModel.listOne(id, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error listing task', err });
    if (!result) return res.status(404).json({ message: 'Task not found' });
    return res.status(200).json(result);
  });
};

const update = (req, res) => {
  const { id } = req.params;
  const task = req.body;

  if (!id) return res.status(400).json({ message: 'Please provide an id' });
  if (task.user_id) return res.status(400).json({ message: 'You cannot update the user_id' });

  taskModel.listOne(id, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error listing task', err });
    if (!result) return res.status(404).json({ message: 'Task not found' });

    const updatedTask = {
      title: task.title || result.title,
      status: task.status || result.status,
      description: task.description || result.description,
      priority: task.priority || result.priority,
      due_date: task.due_date || result.due_date
    };

    taskModel.update(id, updatedTask, (err, result) => {
      if (err) return res.status(500).json({ message: 'Error updating task', err });
      if (!result) return res.status(404).json({ message: 'Task not found' });
      return res.status(200).json({ message: 'Task updated successfully' });
    });
  });
};

const deleteOne = (req, res) => {
  const { id } = req.params;
  taskModel.deleteOne(id, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error deleting task', err });
    if (!result) return res.status(404).json({ message: 'Task not found' });
    return res.status(200).json({ message: 'Task deleted successfully' });
  });
};

module.exports = { create, list, listOne, update, deleteOne };