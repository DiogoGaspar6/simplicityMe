const connection = require ('../../config');

const createTask = (task, callback) => {
  const query = `INSERT INTO tasks SET ?`;
  connection.query(query, [task], (err, result) => {
    if (err) {
      console.error("Error executing query to create task: ", err);
      return callback(err);
    }
    return callback(null, result);
  });
};

module.exports = { createTask };