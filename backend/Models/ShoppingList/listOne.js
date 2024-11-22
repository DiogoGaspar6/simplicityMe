const connection = require('../../config');

const listOneShoppingList = (id, callback) => {
  const query = `SELECT * FROM shoppinglist WHERE id = ?`;
  connection.query(query, [id], (err, result) => {
    if (err) {
      console.error("Error executing query to list shopping list: ", err);
      return callback(err);
    }
    if (result.length === 0) {
      return callback(null, null);
    }
    return callback(null, result);
  });
};

module.exports = listOneShoppingList