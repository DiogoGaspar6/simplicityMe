const connection = require('../../config');

const listOneTask = (id, callback) => {
  const query = `SELECT * FROM tasks WHERE id = ?`;
  connection.query(query, [id], (err, result) => {
    if (err) {
      console.error("Error executing query to list task: ", err);
      return callback(err);
    }
    if (result.length === 0) {
      return callback(null, null);
    }
    return callback(null, result);
  });
};

module.exports = { listOneTask };