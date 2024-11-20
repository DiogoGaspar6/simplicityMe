const { updateUser } = require('../../Models/User/update.js');
const { listOneUser } = require('../../Models/User/listOne.js');

const update = (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;

  if (!id) {
    return res.status(400).json({ error: 'Please provide an id' });
  }

  listOneUser(id, (err, users) => {
    if (err) {
      return res.status(500).json({ error: "Error listing user" });
    }

    if (!users || users.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const currentUser = users[0];

    const updatedUser = {
      username: username !== undefined ? username : currentUser.username,
      email: email !== undefined ? email : currentUser.email,
      password_hash: password !== undefined ? password : currentUser.password_hash
    };

    console.log("updatedUser:",updatedUser);
    console.log("currentUser:",currentUser);

    updateUser(updatedUser, id, (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Error updating user" });
      }
      return res.status(200).json({ message: "User updated successfully" });
    });
  });
}

module.exports = { update };