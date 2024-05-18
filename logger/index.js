const bunyan = require('bunyan');

let logger;
module.exports.initLogger = async (config) => {
  const { logger: { name, level } } = config;
  const createLogger = await  bunyan.createLogger({
    name,
    level,
  });
  logger = createLogger;
  return logger;
};

module.exports.logger = () => {
  return logger;
};
