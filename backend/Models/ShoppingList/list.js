const connection = require('../../config');

const listShoppingList = (callback) => {
  const query = `SELECT * FROM shoppinglist`;
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error executing query to list shopping list: ", err);
      return callback(err, null);
    }
    if (results.length === 0) {
      return callback(err, null);
    }
    return callback(null, results);
  })
}

module.exports = listShoppingList;