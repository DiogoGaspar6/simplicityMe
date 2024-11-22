const connection = require('../../config');

const updateShoppingList = (id, shoppingList,callback) => {
  const query = `UPDATE shoppinglist SET ? WHERE id = ?`;
  connection.query(query, [shoppingList, id], (err, result) => {
    if (err) {
      console.error("Error executing query to delete shopping list: ", err);
      return callback(err);
    }
    if (!result.affectedRows) {
      return callback({ error: "Shopping list not found" });
    }
    return callback(null, result);
  })
}

module.exports = updateShoppingList;