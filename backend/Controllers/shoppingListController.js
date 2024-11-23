const shoppingListModel = require('../models/shoppingListModel');

const create = (req, res) => {
  const shoppingList = req.body;
  if (!shoppingList.item_name || !shoppingList.quantity || !shoppingList.status || !shoppingList.user_id) {
    return res.status(400).json({ message: 'Please provide all required fields (item_name, quantity, status, user_id)' });
  }
  shoppingListModel.create(shoppingList, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error creating shopping list', err });
    return res.status(201).json({ message: 'Shopping list created successfully' });
  });
};

const list = (req, res) => {
  shoppingListModel.list((err, result) => {
    if (err) return res.status(500).json({ message: 'Error listing shopping lists', err });
    return res.status(200).json(result);
  });
};

const listOne = (req, res) => {
  const { id } = req.params;
  shoppingListModel.listOne(id, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error listing shopping list', err });
    if (!result) return res.status(404).json({ message: 'Shopping list not found' });
    return res.status(200).json(result);
  });
};

const update = (req, res) => {
  const { id } = req.params;
  const shoppingList = req.body;
  shoppingListModel.update(id, shoppingList, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error updating shopping list', err });
    if (!result) return res.status(404).json({ message: 'Shopping list not found' });
    return res.status(200).json({ message: 'Shopping list updated successfully' });
  });
};

const deleteOne = (req, res) => {
  const { id } = req.params;
  shoppingListModel.deleteOne(id, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error deleting shopping list', err });
    if (!result) return res.status(404).json({ message: 'Shopping list not found' });
    return res.status(200).json({ message: 'Shopping list deleted successfully' });
  });
};

module.exports = { create, list, listOne, update, deleteOne };