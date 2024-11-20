const connection = require('../../config');
const bcrypt = require('bcrypt');

const updateUser = (user, id, callback) => {
  const { username, email, password_hash } = user;

  if (password_hash) {
    bcrypt.hash(password_hash, 10, (err, hash) => {
      if (err) {
        console.error("Error hashing password: ", err);
        return callback(err);
      }
      user.password_hash = hash;
      updateUserDB(user, id, callback);
    });
  } else {
    updateUserDB(user, id, callback);
  }
};

const updateUserDB = (user, id, callback) => {
  const query = `UPDATE user SET ? WHERE id = ?`;
  connection.query(query, [user, id], (err, result) => {
    if (err) {
      console.error("Error executing query to update user: ", err);
      return callback(err);
    }
    return callback(null, result);
  });
};


module.exports = { updateUser }