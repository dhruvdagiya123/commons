const validatios = {
    userNameValidation: {
        notEmpty: true,
        errorMessage: 'Name field cannot be empty',
    },
    emailValidation: {
        notEmpty: true,
        errorMessage: 'Email cannot be empty'
    },
    passwordValidation: {
        notEmpty: true,
        errorMessage: 'Passowrd cannot be empty'
    }
}

const userValidation = {
    registerUserValidation: {
        userName: validatios.userNameValidation,
        email: validatios.emailValidation,
        password: validatios.passwordValidation
    }
}

module.exports = userValidation;
