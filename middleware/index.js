const reqValidation = require('./req-validation');
const checkHolderExistance = require('./check-holder-exist');
const checkUserByEmail = require('./check-user-by-email-exist');
const validateAccessToken = require('./verify-access-token');

module.exports = {
  reqValidation,
  checkHolderExistance,
  checkUserByEmail,
  validateAccessToken,
};
