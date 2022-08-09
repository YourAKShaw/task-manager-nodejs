// eslint-disable-next-line no-unused-vars
const createError = require('http-errors');

const tasks = [];

module.exports = {
  getHelloWorld: () => {
    return 'Hello World!';
  },

  getTasks: () => {
    return tasks;
  },
};
