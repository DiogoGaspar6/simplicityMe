const { createUser }  = require('../../Models/User/create.js');

const registerUser = (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Please provide all required fields (username, email, password)' });
  }

  const user = {
    username,
    email,
    password
  };

  createUser(user, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error creating user' + err });
    }
    return res.status(201).json({ message: 'User created successfully' });
  });
}

module.exports = { registerUser };