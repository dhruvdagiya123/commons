const _ = require('lodash');

const GENERATEERROROBJECT = (location, params, message) => {
  return {
    location, params, msg: message,
  };
};

/**
 * status code middleware for 200
 *
 * @param {object} req
 * @param {object} res
 * @param {object} error
 */
const SUCCESS = (req, res) => {
  const { data } = res;
  if (!_.isNil(data)) {
    res.status(200).json(data);
  } else {
    res.status(200).end();
  }
};

/**
 * status code middleware for 400
 *
 * @param {object} req
 * @param {object} res
 * @param {object} error
 */
const BADREQUEST = (req, res, error) => {
  res.status(400).json(error);
};

/**
 * status code middleware for 409
 *
 * @param {object} req
 * @param {object} res
 * @param {object} error
 */
const CONFLICT = (req, res, error) => {
  res.status(409).json(error);
};

module.exports = {
  SUCCESS,
  BADREQUEST,
  CONFLICT,
  GENERATEERROROBJECT,
};
