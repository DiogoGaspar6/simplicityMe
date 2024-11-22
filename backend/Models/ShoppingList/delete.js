const connection = require('../../config')

const deleteOneShoppingList = (id, callback) =>{
  const query = `DELETE FROM shoppinglist WHERE id = ?`;
  connection.query(query, [id], (err, result) => {
    if (err) {
      console.error("Error executing query to delete shopping list: ", err);
      return callback(err);
    }
    if (!result.affectedRows) {
      return callback({ error: "Shopping list not found!" });
    }
    return callback(null, result);
  })
}

module.exports = deleteOneShoppingList