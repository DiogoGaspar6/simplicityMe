const { createTask } = require('../../Models/Task/create.js');

const create = (req, res) => {
  const task = req.body;

  if (!task.title || !task.status || !task.user_id) {
    return res.status(400).json({ error: 'Please provide all required fields (title, status, userId)' });
  }

  createTask(task, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error creating task', err });
    }
    return res.status(201).json({ message: 'Task created successfully', taskId: result.insertId });
  });
};

module.exports = { create };