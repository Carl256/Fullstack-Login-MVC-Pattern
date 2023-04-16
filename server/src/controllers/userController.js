const userService = require('../services/userService');

// destructure the functions from userService
const { loginService, signupService } = userService

exports.login = async (req, res, next) => {
  try {
    // pass the body to the loginUserService function and await the response, if there is an error, pass it to the next middleware
    await loginService(req, res, next)

  } catch (err) {
    next(err);
  }
};

exports.signup = async (req, res, next) => {
  try {
    // pass the body to the signupUserService function and await the response, if there is an error, pass it to the next middleware
     await signupService(req, res, next);

  } catch (err) {
    next(err);
  }
};

