const validators = {
  userNameValidation: {
    in: ['body', 'params'],
    notEmpty: true,
    errorMessage: 'Username cannot be empty',
  },
  passwordValidation: {
    in: ['body'],
    notEmpty: true,
    errorMessage: 'Password cannot be empty',
  },
  optValidation: {
    in: ['body'],
    notEmpty: true,
    errorMessage: 'OTP cannot be empty',
  },
  newPasswordValidation: {
    in: ['body'],
    notEmpty: true,
    errorMessage: 'New Password cannot be empty',
  },
  idValidation: {
    in: ['params'],
    notEmpty: true,
    errorMessage: 'Id cannot be empty',
  },
};

const authValidation = {
  loginSchema: {
    userName: validators.userNameValidation,
    password: validators.passwordValidation,
  },

  verifyOtpSchema: {
    userName: validators.userNameValidation,
    otp: validators.optValidation,
  },

  changePasswordSchema: {
    id: validators.idValidation,
    newPassword: validators.newPasswordValidation,
  },
};

module.exports = authValidation;
