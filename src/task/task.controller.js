// eslint-disable-next-line no-unused-vars
const createError = require('http-errors');
const TaskService = require('./task.service');
const ApiResponse = require('../common/apiResponse');

module.exports = {
  getHelloWorld: (req, res, next) => {
    try {
      res.send(TaskService.getHelloWorld());
    } catch (error) {
      console.log(error.message);
    }
  },

  getTasks: (req, res, next) => {
    try {
      res.send(new ApiResponse(200, 'success', TaskService.getTasks()));
    } catch (error) {
      console.log(error.message);
    }
  },
};
