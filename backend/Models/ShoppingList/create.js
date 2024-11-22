const connection = require('../../config');

const createShoppingList = (shoppingList, callback) => {
  const query = `INSERT INTO shoppinglist SET ?`;
  connection.query(query, [shoppingList], (err, result) => {
    if (err) {
      console.error("Error executing query to create shopping list: ", err);
      return callback(err);
    }
    if (!result) {
      return callback(err, null);
    }
    return callback(null, result);
  });
}

module.exports = createShoppingList