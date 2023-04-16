const { body } = require('express-validator');

exports.loginSanitizationRules = () => {
  return [
    body('email')
      .trim()
      .isEmail()
      .withMessage('Please provide a valid email address'),
    body('password')
      .trim()
      .notEmpty()
      .withMessage('Password field is required'),
  ];
};
