// eslint-disable-next-line no-unused-vars
const createError = require('http-errors');
const TaskService = require('./task.service');

module.exports = {
  getHelloWorld: (req, res, next) => {
    try {
      res.send(TaskService.getHelloWorld());
    } catch (error) {
      console.log(error.message);
    }
  },
};
