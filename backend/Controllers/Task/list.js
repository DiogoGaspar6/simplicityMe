const { listTasks } = require('../../Models/Task/list.js');

const list = (req, res) => {
  listTasks((err, result) => {
    if (err) {
      return res.status(500).json({ error: "Error listing tasks" });
    }
    return res.status(200).json(result);
  });
}

module.exports = { list };