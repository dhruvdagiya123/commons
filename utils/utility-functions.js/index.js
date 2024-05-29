const _ = require('lodash');

module.exports.generatePassword = (length) => {
  return _.join(
    _.times(
      length, () => _.sample('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'))
    , '');
};
