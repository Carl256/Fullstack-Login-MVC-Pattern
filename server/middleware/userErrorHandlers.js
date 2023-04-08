
const UserError = require('../services/errorHandlerService');

const handleUserError = (err, req, res, next) => {
  if (err instanceof UserError) {
    res.status(err.status).json({ message: err.message, errors: err.errors });
  } else {
    next(err);
  }
}

module.exports = handleUserError;