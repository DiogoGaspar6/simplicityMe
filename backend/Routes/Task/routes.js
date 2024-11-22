const express = require('express');
const { create } = require('../../Controllers/Task/create.js');
const { list } = require('../../Controllers/Task/list.js');
const { listOne } = require('../../Controllers/Task/listOne.js');
const { update }  = require('../../Controllers/Task/update.js');
const deleteOne = require('../../Controllers/Task/delete.js');

const router = express.Router();

router.post('/create', create);

router.get('/', list);

router.get('/:id', listOne);

router.put('/update/:id', update);

router.delete('/delete/:id', deleteOne);

module.exports = router;