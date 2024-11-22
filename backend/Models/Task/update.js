const connection = require('../../config');

const updateTask = (task, callback) => {
  const { id, ...fields } = task;
  const query = `UPDATE tasks SET ? WHERE id = ?`;
  connection.query(query, [fields, task.id], (err, result) => {
    if (err) {
      console.error("Error executing query to update task: ", err);
      return callback(err);
    }
    if (result.affectedRows === 0) {
      return callback({ error: 'Task not found' });
    }
    return callback(null, result);
  });
};

module.exports = updateTask;