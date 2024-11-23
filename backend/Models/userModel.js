const connection = require('../config');
const bcrypt = require('bcrypt');

const create = (user, callback) => {
  const { username, email, password } = user;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return callback(err);
    const query = `INSERT INTO user (username, email, password_hash) VALUES (?, ?, ?)`;
    connection.query(query, [username, email, hash], callback);
  });
};

const list = (callback) => {
  const query = `SELECT * FROM user`;
  connection.query(query, callback);
};

const listOne = (id, callback) => {
  const query = `SELECT * FROM user WHERE id = ?`;
  connection.query(query, [id], (err, result) => {
    if (err) return callback(err);
    if (result.length === 0) return callback(null, null);
    return callback(null, result[0]);
  });
};

const update = (id, user, callback) => {
  const { username, email, password } = user;
  if (password) {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) return callback(err);
      user.password_hash = hash;
      delete user.password;
      const query = `UPDATE user SET ? WHERE id = ?`;
      connection.query(query, [user, id], callback);
    });
  } else {
    const query = `UPDATE user SET ? WHERE id = ?`;
    connection.query(query, [user, id], callback);
  }
};

const deleteOne = (id, callback) => {
  const query = `DELETE FROM user WHERE id = ?`;
  connection.query(query, [id], (err, result) => {;
  if (err) return callback(err);
  if (result.affectedRows === 0) return callback(null, null);
  return callback(null, result);
  });
}

module.exports = { create, list, listOne, update, deleteOne };