// eslint-disable-next-line no-unused-vars
const createError = require('http-errors');
const TaskService = require('./task.service');
const ApiResponse = require('../common/apiResponse');
const logger = require('../common/logger');

module.exports = {
  getTasks: (req, res, next) => {
    try {
      res.send(new ApiResponse(200, 'success', TaskService.getTasks()));
    } catch (error) {
      logger.log('error', error.message);
      next(createError(500, error.message));
    }
  },
};
