const connection = require('../config');

const create = (shoppingList, callback) => {
  const query = `INSERT INTO shoppinglist SET ?`;
  connection.query(query, [shoppingList], callback);
};

const list = (callback) => {
  const query = `SELECT * FROM shoppinglist`;
  connection.query(query, callback);
};

const listOne = (id, callback) => {
  const query = `SELECT * FROM shoppinglist WHERE id = ?`;
  connection.query(query, [id], (err, result) => {
    if (err) return callback(err);
    if (result.length === 0) return callback(null, null);
    return callback(null, result[0]);
  });
};

const update = (id, shoppingList, callback) => {
  const query = `UPDATE shoppinglist SET ? WHERE id = ?`;
  connection.query(query, [shoppingList, id], (err, result) => {
    if (err) return callback(err);
    if (result.affectedRows === 0) return callback(null, null);
    return callback(null, result);
  });
};

const deleteOne = (id, callback) => {
  const query = `DELETE FROM shoppinglist WHERE id = ?`;
  connection.query(query, [id], (err, result) => {
    if (err) return callback(err);
    if (result.affectedRows === 0) return callback(null, null);
    return callback(null, result);
  });
};

module.exports = { create, list, listOne, update, deleteOne };