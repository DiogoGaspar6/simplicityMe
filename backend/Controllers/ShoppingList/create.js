const createShoppingList = require('../../Models/ShoppingList/create');

const create = (req, res) => {
  const shoppingList = req.body;

  if (!shoppingList.item_name || !shoppingList.quantity || !shoppingList.status || !shoppingList.user_id) {
    return res.status(400).json({ error: 'Please provide all required fields (item_name, quantity, status, user_id)' });
  }

  createShoppingList(shoppingList, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Error creating shopping list", err });
    }
    return res.status(200).json({ message: "Shopping list created successfully", shoppingListId: result.insertId });
  });
}

module.exports = { create };

