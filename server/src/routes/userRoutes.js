const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const errorHanderMiddleware = require('../middleware/authErrors/userErrorHandlers');
const { sanitizeLoginInput } = require('../middleware/authentication/userAuth');

const { login, signup, logout } = userController;

const { handleLoginError, handleSignupError } = errorHanderMiddleware;

router.post('/login', sanitizeLoginInput, handleLoginError, login);
router.post('/signup', handleSignupError, signup);
// router.post('/logout', logout);


module.exports = router;
