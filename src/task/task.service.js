/* eslint-disable indent */
// eslint-disable-next-line no-unused-vars
const createError = require('http-errors');
const generateId = require('../common/helpers/generateId');
const Task = require('./entity/task.entity');

const tasks = [];

module.exports = {
  createTask: (createTaskDto) => {
    const task = new Task(
      generateId(),
      createTaskDto.title,
      createTaskDto.description,
      createTaskDto.deadline,
      createTaskDto.notes || [],
      false,
    );
    tasks.push(task);
    return task;
  },

  getTasks: () => {
    return tasks;
  },

  getTask: (taskId) => {
    return tasks.find((task) => task.id === parseInt(taskId));
  },
};
