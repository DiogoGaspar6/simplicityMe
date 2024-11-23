const connection = require('../config');

const create = (task, callback) => {
  const query = `INSERT INTO tasks SET ?`;
  connection.query(query, [task], callback);
};

const list = (callback) => {
  const query = `SELECT * FROM tasks`;
  connection.query(query, callback);
};

const listOne = (id, callback) => {
  const query = `SELECT * FROM tasks WHERE id = ?`;
  connection.query(query, [id], (err, result) => {
    if (err) return callback(err);
    if (result.length === 0) return callback(null, null);
    return callback(null, result[0]);
  });
};

const update = (id, task, callback) => {
  const query = `UPDATE tasks SET ? WHERE id = ?`;
  connection.query(query, [task, id], (err, result) => {
    if (err) return callback(err);
    if (result.affectedRows === 0) return callback(null, null);
    return callback(null, result);
  });
};

const deleteOne = (id, callback) => {
  const query = `DELETE FROM tasks WHERE id = ?`;
  connection.query(query, [id], (err, result) => {
    if (err) return callback(err);
    if (result.affectedRows === 0) return callback(null, null);
    return callback(null, result);
  });
};

module.exports = { create, list, listOne, update, deleteOne };