// create error handling functions for the routes in userService.js

const { NOT_FOUND, UNAUTHORIZED, INTERNAL_SERVER_ERROR } = require('http-status-code');

exports.loginErrorHandler = function(err, req, res, next) {
  switch (err.message) {
    case 'User not found':
      return res.status(NOT_FOUND).send(err.message);
    case 'Invalid password':
      return res.status(UNAUTHORIZED).send(err.message);
    default:
      return res.status(INTERNAL_SERVER_ERROR).send('An unexpected error occurred');
  }
}

