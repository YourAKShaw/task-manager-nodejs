/* eslint-disable indent */
// eslint-disable-next-line no-unused-vars
const createError = require('http-errors');
const TaskService = require('./task.service');
const ApiResponse = require('../common/apiResponse');
const logger = require('../common/logger');
const createTaskSchema = require('./schema/create-task.schema');

module.exports = {
  createTask: (req, res, next) => {
    try {
      // eslint-disable-next-line object-curly-spacing
      const { error } = createTaskSchema.validate(req.body);
      if (error) {
        logger.log('error', error.message);
        return next(createError(400, error.message));
      }
      const task = TaskService.createTask(req.body);
      logger.log('info', `Task with id ${task.id} created`);
      res
        .status(201)
        .send(new ApiResponse(201, 'Task created successfully', task));
    } catch (error) {
      logger.log('error', error.message);
      return next(createError(500, error.message));
    }
  },

  getTasks: (req, res, next) => {
    try {
      res.send(new ApiResponse(200, 'success', TaskService.getTasks()));
    } catch (error) {
      logger.log('error', error.message);
      next(createError(500, error.message));
    }
  },
};
