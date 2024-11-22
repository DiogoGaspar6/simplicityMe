const { listOneTask } = require('../../Models/Task/listOne');

const listOne = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'Please provide an id' });
  }

  listOneTask(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Error listing task" });
    }
    if (!result) {
      return res.status(404).json({ error: "Task not found" });
    }
    return res.status(200).json(result);
  });
}

module.exports = { listOne };