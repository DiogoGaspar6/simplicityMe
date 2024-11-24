const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

const register = (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) return res.status(400).json({ message: 'Please provide all required fields (username, email, password)' });

  userModel.findByUsername(username, (err, existingUser) => {
    if (err) return res.status(500).json({ message: 'Error finding user by username', err });
    if (existingUser) return res.status(400).json({ message: 'Username already exists' });

    bcrypt.hash(password, 10, (err, hash) => {
      if (err) return res.status(500).json({ message: 'Error hashing password', err });

      userModel.create({ username, email, password_hash: hash }, (err, result) => {
        if (err) return res.status(500).json({ message: 'Error creating user', err });
        return res.status(200).json({ message: 'User created successfully' });
      });
    });
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

const authenticate = (req, res) => {
  const { username, password } = req.body;
  userModel.findByUsername(username, (err, user) => {
    if (err) return res.status(500).json({ message: 'Error authenticating user', err });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    bcrypt.compare(password, user.password_hash, (err, isMatch) => {
      if (err) return res.status(500).json({ message: 'Error authenticating user', err });
      if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

      return res.status(200).json({ message: 'User authenticated successfully', username: user.username });
    });
  });
}

module.exports = { register, list, listOne, update, deleteOne, authenticate };