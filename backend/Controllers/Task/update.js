const updateTask = require('../../Models/Task/update');
const { listOneTask } = require('../../Models/Task/listOne');

const update = (req, res) => {
  const { id } = req.params;
  const task = req.body;
  task.id = id;

  if (!id) {
    return res.status(400).json({ error: 'Please provide an id' });
  }

  listOneTask(id, (err, tasks) => {
    if (err) {
      return res.status(500).json({ error: "Error listing task" });
    }
    if (!tasks) {
      return res.status(404).json({ error: "Task not found" });
    }

    const currentTask = tasks[0];

    const updatedTask = {
      id: task.id,
      title: task.title !== undefined ? task.title : currentTask.title,
      status: task.status !== undefined ? task.status : currentTask.status,
      user_id: task.user_id !== undefined ? task.user_id : currentTask.user_id,
      description: task.description !== undefined ? task.description : currentTask.description,
      priority: task.priority !== undefined ? task.priority : currentTask.priority,
      due_date: task.due_date !== undefined ? task.due_date : currentTask.due_date,
    };

    updateTask(updatedTask, (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Error updating task" , details: err });
      }
      return res.status(200).json({ message: "Task updated successfully" });
    });
  });
}  

module.exports = { update };