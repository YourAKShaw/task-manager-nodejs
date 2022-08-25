/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
const winston = require('winston');
const emoji = require('node-emoji');

const logger = (module.exports = winston.createLogger({
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.simple(),
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.printf((info) => {
      let emojiToLog = '';
      if (info.level === '\x1B[32minfo\x1B[39m') {
        emojiToLog = emoji.get('white_check_mark');
      } else if (info.level === '\x1B[31merror\x1B[39m') {
        emojiToLog = emoji.get('x');
      }
      return (
        `[${info.timestamp}] ${emojiToLog} [${info.level}]: ${info.message}` +
        (info.splat !== undefined ? `${info.splat}` : ' ')
      );
    }),
  ),
}));

module.exports = logger;
