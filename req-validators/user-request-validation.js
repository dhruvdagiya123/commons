const validatios = {
  userNameValidation: {
    notEmpty: true,
    errorMessage: 'Name field cannot be empty',
  },
  emailValidation: {
    notEmpty: true,
    errorMessage: 'Email cannot be empty',
  },
  passwordValidation: {
    notEmpty: true,
    errorMessage: 'Passowrd cannot be empty',
  },
  prefixValidation: {
    in: ['body'],
    notEmpty: true,
    errorMessage: 'Prefix cannot be empty',
  },
  firstNameValidation: {
    in: ['body'],
    notEmpty: true,
    errorMessage: 'First Name cannot be empty',
  },
  lastNameValidation: {
    in: ['body'],
    notEmpty: true,
    errorMessage: 'Last Name cannot be empty',
  },
  emailValidation: {
    in: ['body'],
    notEmpty: true,
    errorMessage: 'Email cannot be empty',
  },
  timezoneValidation: {
    in: ['body'],
    notEmpty: true,
    errorMessage: 'Timezone cannot be empty',
  },
  phoneValidation: {
    in: ['body'],
    notEmpty: true,
    errorMessage: 'Phone cannot be empty',
  },
  addressValidation: {
    in: ['body'],
    notEmpty: true,
    errorMessage: 'Address cannot be empty',
  },
  cityValidation: {
    in: ['body'],
    notEmpty: true,
    errorMessage: 'City cannot be empty',
  },
  stateValidation: {
    in: ['body'],
    notEmpty: true,
    errorMessage: 'State cannot be empty',
  },
  countryValidation: {
    in: ['body'],
    notEmpty: true,
    errorMessage: 'Country cannot be empty',
  },
  zipcodeValidation: {
    in: ['body'],
    notEmpty: true,
    errorMessage: 'Zipcode cannot be empty',
  },
  addharCardNumberValidation: {
    in: ['body'],
    notEmpty: true,
    errorMessage: 'Adhar card cannot be empty',
  },
  licenseNumberValidation: {
    in: ['body'],
    notEmpty: true,
    errorMessage: 'License cannot be empty',
  },
  medicalSpecialitiesValidation: {
    in: ['body'],
    notEmpty: true,
    errorMessage: 'Medical Speciality cannot be empty',
  },
};

const userValidation = {
  registerUserValidation: {
    userName: validatios.userNameValidation,
    email: validatios.emailValidation,
    password: validatios.passwordValidation,
  },

  postDoctorValidation: {
    prefix: validatios.prefixValidation,
    firstName: validatios.firstNameValidation,
    lastName: validatios.lastNameValidation,
    userName: validatios.userNameValidation,
    email: validatios.emailValidation,
    timeZone: validatios.timezoneValidation,
    phone: validatios.phoneValidation,
    address: validatios.addressValidation,
    city: validatios.cityValidation,
    state: validatios.stateValidation,
    country: validatios.countryValidation,
    zipcode: validatios.zipcodeValidation,
    adharCardNumber: validatios.addharCardNumberValidation,
    licenseNumber: validatios.licenseNumberValidation,
    medicalSpecialities: validatios.medicalSpecialitiesValidation,
  },
};

module.exports = userValidation;
