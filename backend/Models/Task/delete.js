const connection = require('../../config');

const deleteTask = (id, callback) => {
  const query = `DELETE FROM tasks WHERE id = ?`;
  connection.query(query, [id], (err, result) => {
    if (err) {
      console.error("Error executing query to delete task: ", err);
      return callback(err);
    }
    if (!result.affectedRows) {
      return callback({ error: "Task not found" });
    }
    return callback(null, result);
  });
};

module.exports = deleteTask;