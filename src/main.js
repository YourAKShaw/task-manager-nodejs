const logger = require('./common/logger');
const app = require('./app');

const PORT = 3000;

app.listen(PORT, () => {
  logger.log('info', `Server started on port ${PORT}`);
});
