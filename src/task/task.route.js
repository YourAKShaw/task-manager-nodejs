const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const TaskController = require('./task.controller');

// test route
router.get('/', TaskController.getTasks);

module.exports = router;
