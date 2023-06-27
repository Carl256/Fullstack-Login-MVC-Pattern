const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const errorHanderMiddleware = require("../middleware/authErrors/userErrorHandlers");
const { sanitizeLoginInput } = require("../middleware/authentication/userAuth");

const { login, signup, passwordReset, logout } = userController;

const { handleLoginError, handleSignupError } = errorHanderMiddleware;

router.post("/login", sanitizeLoginInput, login);
router.post("/signup", signup);
router.post("/password-reset", passwordReset);

// // use the error handler middleware
router.use(handleLoginError, handleSignupError);

module.exports = router;
