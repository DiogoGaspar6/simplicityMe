const express = require('express');
const { registerUser } = require('../../Controllers/User/register.js');
const { list } = require('../../Controllers/User/list.js');
const { listOne } = require('../../Controllers/User/listOne.js');
const { update } = require('../../Controllers/User/update.js');
const { deleteOne } = require('../../Controllers/User/delete.js');

const router = express.Router();

router.post('/register', registerUser);

router.get('/', list);

router.get('/:id', listOne);

router.put('/update/:id', update);

router.delete('/delete/:id', deleteOne);

module.exports = router;