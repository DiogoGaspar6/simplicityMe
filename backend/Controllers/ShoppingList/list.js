const listShoppingList = require('../../Models/ShoppingList/list');

const list = (req, res) => {
  listShoppingList((err, result) => {
    if (err) {
      return res.status(500).json({ error: "Error listing shopping list" });
    }
    return res.status(200).json(result);
  });
}

module.exports = { list };

