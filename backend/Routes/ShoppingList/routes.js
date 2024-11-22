const router = require('express').Router();
const { list } = require('../../Controllers/ShoppingList/list.js');
const { listOne } = require('../../Controllers/ShoppingList/listOne.js');
const { create } = require('../../Controllers/ShoppingList/create.js');
  const { update } = require('../../Controllers/ShoppingList/update.js');
  const { deleteOne } = require('../../Controllers/ShoppingList/delete.js');


router.get('/', list)

router.get('/:id', listOne)

router.post('/create', create)

router.put('/update/:id', update)

router.delete('/delete/:id', deleteOne)


module.exports = router;