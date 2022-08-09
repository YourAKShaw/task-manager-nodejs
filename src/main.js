const logger = require('./common/logger');
const app = require('./app');

require('./common/helpers/printAsciiArt')();

const PORT = 3000;

app.listen(PORT, () => {
  logger.log('info', `Server started on port ${PORT}`);
});
