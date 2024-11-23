const connection = require('../config');

const list = (callback) => {
  const query = `SELECT * FROM notes`;
  connection.query(query, (err, results) => {
    if (err) return callback(err);
    return callback(null, results);
  });
}

const listOne = (id, callback) => {
  const query = `SELECT * FROM notes WHERE id = ?`;
  connection.query(query, [id], (err, result) => {
    if (err) return callback(err);
    if (result.length === 0) return callback(null, null);
    return callback(null, result[0]);
  });
};

const create = (note, callback) => {
  const query = `INSERT INTO notes SET ?`;
  connection.query(query, [note], (err, result) => {
    if (err) return callback(err);
    return callback(null, result);
  });
};

const update = (id, note, callback) => {
  const query = `UPDATE notes SET ? WHERE id = ?`;
  connection.query(query, [note, id], (err, result) => {
    if (err) return callback(err);
    if (result.affectedRows === 0) return callback(null, null);
    return callback(null, result);
  });
}

const deleteOne = (id, callback) =>{
  const query = `DELETE FROM notes WHERE id = ?`;
  connection.query(query, [id], (err, result) => {
    if (err) return callback(err);
    if (result.affectedRows === 0) return callback(null, null);
    return callback(null, result);
  })
}


module.exports = {
  list,
  listOne,
  create,
  update,
  deleteOne
};