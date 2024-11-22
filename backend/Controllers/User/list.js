const { listUsers } = require('../../Models/User/list');

const list = (req, res) => {
  listUsers( (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Error listing users" });
    }
    if (!result) {
      return res.status(404).json({ error: "Users not found" });
    }
    return res.status(200).json(result);
  });
}

module.exports = { list };