const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const TaskController = require('./task.controller');

router.post('/', TaskController.createTask);
router.get('/', TaskController.getTasks);
router.get('/:taskId', TaskController.getTask);
router.patch('/:taskId', TaskController.updateTask);

module.exports = router;
