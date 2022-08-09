/* eslint-disable indent */
// eslint-disable-next-line no-unused-vars
const createError = require('http-errors');
const TaskService = require('./task.service');
const ApiResponse = require('../common/apiResponse');
const logger = require('../common/logger');
const createTaskSchema = require('./schema/create-task.schema');
const updateTaskSchema = require('./schema/update-task.schema');

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
      res.send(
        new ApiResponse(
          200,
          'success',
          TaskService.getTasks(req.query.completed),
        ),
      );
    } catch (error) {
      logger.log('error', error.message);
      next(createError(500, error.message));
    }
  },

  getTask: (req, res, next) => {
    try {
      const task = TaskService.getTask(req.params.taskId);
      if (!task) {
        logger.log('error', `Task with id ${req.params.taskId} not found`);
        return next(createError(404, 'Task not found'));
      }
      res.send(new ApiResponse(200, 'success', task));
    } catch (error) {
      logger.log('error', error.message);
      next(createError(500, error.message));
    }
  },

  updateTask: (req, res, next) => {
    try {
      // eslint-disable-next-line object-curly-spacing
      const { error } = updateTaskSchema.validate(req.body);
      if (error) {
        logger.log('error', error.message);
        return next(createError(400, error.message));
      }
      const task = TaskService.updateTask(req.params.taskId, req.body);
      if (!task) {
        logger.log('error', `Task with id ${req.params.taskId} not found`);
        return next(createError(404, 'Task not found'));
      }
      logger.log('info', `Task with id ${task.id} updated`);
      res.send(new ApiResponse(200, 'success', task));
    } catch (error) {
      logger.log('error', error.message);
      next(createError(500, error.message));
    }
  },

  deleteTask: (req, res, next) => {
    try {
      const task = TaskService.getTask(req.params.taskId);
      if (!task) {
        logger.log('error', `Task with id ${req.params.taskId} not found`);
        return next(createError(404, 'Task not found'));
      }
      TaskService.deleteTask(req.params.taskId);
      logger.log('info', `Task with id ${req.params.taskId} deleted`);
      res.send(new ApiResponse(200, 'success', task));
    } catch (error) {
      logger.log('error', error.message);
      next(createError(500, error.message));
    }
  },
};
