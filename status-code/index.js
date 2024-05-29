const _ = require('lodash');

/**
 * Generate error object to  throw
 *
 * @param {*} location
 * @param {*} params
 * @param {*} message
 */
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
  const { body } = res;
  if (!_.isNil(body)) {
    res.status(200).json(body);
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

/**
 * status code middleware for 404
 *
 * @param {object} req
 * @param {object} res
 * @param {object} error
 */
const NOTFOUND = (req, res, error) => {
  res.status(404).json(error);
};

/**
 * status code middleware for 410
 *
 * @param {object} req
 * @param {object} res
 * @param {object} error
 */
const GONE = (req, res, error) => {
  res.status(410).json(error);
};

/**
 * status code middleware for 401
 *
 * @param {*} req
 * @param {*} res
 * @param {*} error
 */
const UNAUTHORIZED = (req, res, error) => {
  res.status(401).json(error);
};

module.exports = {
  SUCCESS,
  BADREQUEST,
  CONFLICT,
  GENERATEERROROBJECT,
  NOTFOUND,
  GONE,
  UNAUTHORIZED,
};
