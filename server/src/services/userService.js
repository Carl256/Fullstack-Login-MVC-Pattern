const userAuthentication = require("../middleware/authentication/userAuth");

// destcture the functions from userAuthentication
const { authenticateUserLogin, authenticateUserSignup } = userAuthentication;

exports.loginService = async (req, res, next) => {
  try {
    // call the authenticateUserLogin middleware to authenticate the user
    return await authenticateUserLogin(req, res, next);
  } catch (error) {
    next(error);
  }
};

exports.signupService = async (req, res, next) => {
  try {
    // call the authenticateUserSignup middleware to authenticate the user
    return await authenticateUserSignup(req, res, next);
  } catch (error) {
    next(error);
  }
};
