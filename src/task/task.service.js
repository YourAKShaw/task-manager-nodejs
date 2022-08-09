// eslint-disable-next-line no-unused-vars
const createError = require('http-errors');

const tasks = [];

module.exports = {
  getTasks: () => {
    return tasks;
  },
};
