const _ = require('lodash');
const {
  logger,
  statusCode: { GENERATEERROROBJECT, NOTFOUND },
} = require('../index');
const { dao } = require('database');

/**
 * Check if user exist in DB by username
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
module.exports = async (req, res, next) => {
  const { authDao } = dao();
  try {
    const { body: { userName }, targetHolderName } = req;
    let currentUserName = userName;
    const params = 'userName';
    let location = 'body';

    if (_.isNil(currentUserName)) {
      const { params: { userName } } = req;
      currentUserName = userName;
      location = 'params';
    }

    if (_.isNil(currentUserName)) {
      const { query: { userName } } = req;
      currentUserName = userName;
      location = 'query';
    }

    const data = await authDao.findOne({ userName: currentUserName }, null, targetHolderName);
    if (_.isNil(data)) {
      logger().error(`Cannot find user with ${currentUserName} username`);
      const error = GENERATEERROROBJECT(
        location,
        params,
        `Cannot find user with ${currentUserName} username`,
      );
      NOTFOUND(req, res, error);
      return;
    }
    req.targetUser = data;
    next();
  } catch (error) {
    logger.error('Error while checking user in database');
    next(error);
  }
};
