const { listOneUser } = require('../../Models/User/listOne.js');

const listOne = (req, res) => { 
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'Please provide an id' });
  }

  listOneUser(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Error listing user" });
    }
    return res.status(200).json(result);
  });
}

module.exports = { listOne };