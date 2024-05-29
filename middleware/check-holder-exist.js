const _ = require('lodash');
const { logger } = require('../index');
const { dao } = require('database');
const { statusCode: { GENERATEERROROBJECT, NOTFOUND } } = require('../index');

/**
 * Middleware to check if tenant exist or not
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
module.exports = async (req, res, next) => {
  const { holderDao } = dao();
  try {
    const holderName = req.headers['x-holder-identifier'];
    const holderData = await holderDao.findOne({ identifier: holderName }, null, 'holder');
    const params = 'x-holder-identifier';
    const location = 'headers';

    if (_.isNil(holderData)) {
      logger().error('Error while checking holder in system');
      const error = await GENERATEERROROBJECT(
        params, location, 'Holder not found in the system',
      );
      NOTFOUND(req, res, error);
      return;
    }
    const { identifier } = holderData;
    req.targetHolder = holderData;
    req.targetHolderName = identifier;
    next();
  } catch (error) {
    logger().error('Error while checking holder in system');
    next(error);
  }
};
