/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
const winston = require('winston');

const logger = (module.exports = winston.createLogger({
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.simple(),
  ),
}));

module.exports = logger;
