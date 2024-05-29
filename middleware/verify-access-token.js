const { logger } = require('../index');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const { statusCode: { GENERATEERROROBJECT, UNAUTHORIZED } } = require('../index');
const { dao } = require('database');
const moment = require('moment');

module.exports = async (req, res, next) => {
  const { authDao } = dao();
  try {
    const { targetHolderName } = req;
    const accessToken = req.headers['access-token'];
    const location = 'headers';
    const params = 'accessToken';

    if (_.isNil(accessToken)) {
      logger().error('Session timed out');
      const error = GENERATEERROROBJECT(
        location, params, 'Your session has expired. Please login again!',
      );
      UNAUTHORIZED(req, res, error);
      return;
    }

    const decode = jwt.decode(accessToken, 'COMMON-GROUNDS');
    const { exp } = decode;

    if (moment.utc().toISOString() > moment.unix(exp).toISOString()) {
      logger().error('Session timed out');
      const error = GENERATEERROROBJECT(
        location, params, 'Your session has expired. Please login again!',
      );
      UNAUTHORIZED(req, res, error);
      return;
    }

    const { id } = decode;
    let data = await authDao.findOne({ id }, null, targetHolderName);
    data = _.omit(data, ['password']);
    req.targetUser = data;
    next();
  } catch (error) {
    logger().error('Error while verifying access-token');
    next(error);
  }
};
