const connection = require('../../config');

const listTasks = (callback) => {
  const query = `SELECT * FROM tasks`;
  connection.query(query, (err, result) => {
    if (err) {
      console.error("Error executing query to list tasks: ", err);
      return callback(err, null);
    }
    return callback(null, result);
  });
};

module.exports = { listTasks };