const userModel = require('../models/userModel');

const register = (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Please provide all required fields (username, email, password)' });
  }
  userModel.create({ username, email, password }, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error creating user', err });
    return res.status(201).json({ message: 'User created successfully' });
  });
};

const list = (req, res) => {
  userModel.list((err, result) => {
    if (err) return res.status(500).json({ message: 'Error listing users', err });
    return res.status(200).json(result);
  });
};

const listOne = (req, res) => {
  const { id } = req.params;
  userModel.listOne(id, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error listing user', err });
    if (!result) return res.status(404).json({ message: 'User not found' });
    return res.status(200).json(result);
  });
};

const update = (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;

  if (!id) {
    return res.status(400).json({ error: 'Please provide an id' });
  }

  userModel.listOne(id, (err, currentUser) => {
    if (err) return res.status(500).json({ message: 'Error listing user', err });
    if (!currentUser) return res.status(404).json({ message: 'User not found' });

    const updatedUser = {
      username: username !== undefined ? username : currentUser.username,
      email: email !== undefined ? email : currentUser.email,
      password_hash: password !== undefined ? password : currentUser.password_hash
    };

    userModel.update(id, updatedUser, (err, result) => {
      if (err) return res.status(500).json({ message: 'Error updating user', err });
      return res.status(200).json({ message: 'User updated successfully' });
    });
  });
};

const deleteOne = (req, res) => {
  const { id } = req.params;
  userModel.deleteOne(id, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error deleting user', err });
    if (!result) return res.status(404).json({ message: 'User not found' });
    return res.status(200).json({ message: 'User deleted successfully' });
  });
};

module.exports = { register, list, listOne, update, deleteOne };