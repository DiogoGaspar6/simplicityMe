const deleteTask = require('../../Models/Task/delete');

const deleteOne = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'Please provide an id' });
  }

  deleteTask(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Error deleting task ", err });
    }
    return res.status(200).json({ message: "Task deleted successfully" });
  })
}

module.exports = deleteOne