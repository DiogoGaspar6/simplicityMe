const connection = require('../../config.js');
const bcrypt = require('bcrypt');

const createUser = (user, callback) => {
  const { username, email, password } = user;

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      console.error("Error hashing password: ", err);
      return callback(err);
    } 

    const query = `INSERT INTO user (username, email, password_hash) VALUES (?, ?, ?)`;
    connection.query(query, [username, email, hash], (err, result) => {
      if (err) {
        console.error("Error executing query to create user: ", err);
        return callback(err);
      }
      return callback(null, result);
    });
  });
}

module.exports = { createUser };