
const { AuthErrors } = require('../../utils/errorHandlers/authErrors');

exports.handleLoginError = (err, req, res, next) => {
  try {
    if (err instanceof AuthErrors) {
      return res.status(err.status).json(err);
    }
  } catch (err) {
    next(err);
  }
};

exports.handleSignupError = (err, req, res, next) => {
  try {
    if (err instanceof AuthErrors) {
      res.status(err.statusCode).json(err.message);
      return;
    }
  } catch (err) {
    next(err);
  }
};


