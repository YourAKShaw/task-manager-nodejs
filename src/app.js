const express = require('express');
const createError = require('http-errors');
const TaskRoutes = require('./task/task.route');

const app = express();

app.use(express.json());

// eslint-disable-next-line object-curly-spacing
app.use(express.urlencoded({ extended: true }));
app.use('/tasks', TaskRoutes);

// 404 handler
app.use((req, res, next) => {
  next(createError(404, 'Not found'));
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

module.exports = app;
