const connection = require('../../config');

const deleteUser = (id, callback) => {
  const query = 'DELETE FROM user WHERE id = ?';
  connection.query(query, [id], (err, result) => {
    if (err) {
      console.error("Error executing query to delete user: ", err);
      return callback(err);
    }
    if (result.affectedRows === 0) {
      return callback({ error: 'User not found' });
    }
    return callback(null, result);
  });
};

module.exports = { deleteUser };