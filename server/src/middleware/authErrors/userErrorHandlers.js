
const { AuthErrors } = require('../../utils/errorHandlers/authErrors');

exports.handleLoginError = (err, req, res, next) => {
  try {
    if (err instanceof AuthErrors) {
      res.statusCode(err.statusCode).json(err.message);
      return;
    }
    // Handle other errors here
    res.status(500).json({ error: 'Internal Server Error' });
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
    // Handle other errors here
    res.status(500).json({ error: 'Internal Server Error' });
  } catch (err) {
    next(err);
  }
};


