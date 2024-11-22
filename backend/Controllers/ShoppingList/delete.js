const deleteOneShoppingList = require('../../Models/ShoppingList/delete.js');

const deleteOne = (req, res) =>{
  const { id }= req.params;

  if(!id){
    return res.status(400).json({error: 'Please provide an id'});
  }

  deleteOneShoppingList(id, (err, result) => {
    if(err){
      return res.status(500).json({error: "Error deleting shopping list", err});
    }
    return res.status(200).json({message: "Shopping list deleted successfully"});
  })
}

module.exports = { deleteOne };