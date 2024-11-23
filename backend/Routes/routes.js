const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const taskController = require('../controllers/taskController');
const shoppingListController = require('../controllers/shoppingListController');

// User routes
router.post('/users/register', userController.register);
router.get('/users', userController.list);
router.get('/users/:id', userController.listOne);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.deleteOne);

// Task routes
router.post('/tasks', taskController.create);
router.get('/tasks', taskController.list);
router.get('/tasks/:id', taskController.listOne);
router.put('/tasks/:id', taskController.update);
router.delete('/tasks/:id', taskController.deleteOne);

// Shopping List routes
router.post('/shopping-list', shoppingListController.create);
router.get('/shopping-list', shoppingListController.list);
router.get('/shopping-list/:id', shoppingListController.listOne);
router.put('/shopping-list/:id', shoppingListController.update);
router.delete('/shopping-list/:id', shoppingListController.deleteOne);

module.exports = router;