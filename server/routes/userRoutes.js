const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const { login, signup, logout } = userController;

router.post('/login', login);
router.post('/signup', signup);
router.post('/logout', logout);

module.exports = router;
