const { deleteUser } = require('../../Models/User/delete');

const deleteOne = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'Please provide an id' });
  }

  deleteUser(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Error deleting user ", err });
    }
    return res.status(200).json({ message: "User deleted successfully" });
  });
}

module.exports = { deleteOne };