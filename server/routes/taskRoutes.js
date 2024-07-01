const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');
router.route('/addTask').post(taskController.addTask);
router.route('/getAllTasks').get(taskController.getAllTasks);
router.route('/editTask/:id').put(taskController.editTask);

router
	.route('deleteTask/:id')
	.put(taskController.statusChange)
	.delete(taskController.deleteTask);

module.exports = router;