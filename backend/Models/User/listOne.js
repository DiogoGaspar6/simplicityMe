const connection = require('../../config.js');

const listOneUser = (id, callback) => {
  const query = `SELECT * FROM user WHERE id = ?`;
  connection.query(query, [id], (err, result) => {
    if (err) {
      console.error("Error executing query to list user: ", err);
      return callback(err);
    }
    if (result.length === 0) {
      return callback(null, null);
    }
    return callback(null, result);
  });
};

module.exports = { listOneUser };