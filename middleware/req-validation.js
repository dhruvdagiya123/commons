const { validationResult } = require('express-validator');
const _ = require('lodash');
const {
  statusCode: { BADREQUEST },
  logger,
} = require('../index');

/**
 *
 * @param {object} req
 * @param {object} res
 * @param {*} next
 */
module.exports = (req, res, next) => {
  try {
    const { errors } = validationResult(req);
    if (!_.isEmpty(errors)) {
      logger().error(`
      Bad Request please check the payload and related elements as API cannot process the request`,
      );
      BADREQUEST(req, res, errors);
      return;
    }
    next();
  } catch (error) {
    logger().error(`Error while validating the request ${error}`);
    next(error);
  }
};
