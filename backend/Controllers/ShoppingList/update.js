const updateShoppingList = require('../../Models/ShoppingList/update.js');
const listOneShoppingList = require('../../Models/ShoppingList/listOne.js');

const update = (req, res) =>{
  const { id } = req.params;
  const shoppingList = req.body;

  if(!id){
    return res.status(400).json({error: 'Please provide an id'});
  }

  listOneShoppingList(id, (err, shoppingLists) => {
    if(err){
      return res.status(500).json({error: "Error listing shopping list"});
    }

    if(!shoppingLists){
      return res.status(404).json({error: "Shopping list not found"});
    }
    
    const currentShoppingList = shoppingLists[0];


    const updatedShoppingList = {
      item_name: shoppingList.item_name || currentShoppingList.item_name,
      quantity: shoppingList.quantity || currentShoppingList.quantity,
      status: shoppingList.status || currentShoppingList.status,
      user_id: shoppingList.user_id || currentShoppingList.user_id
    }

    updateShoppingList(id, updatedShoppingList, (err, result) => {
      if(err){
        return res.status(500).json({error: "Error updating shopping list"});
        }
      return res.status(200).json({message: "Shopping list updated successfully"});
    })
  })
}

module.exports = { update };