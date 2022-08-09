const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const TaskController = require('./task.controller');

router.get('/', TaskController.getTasks);

module.exports = router;
