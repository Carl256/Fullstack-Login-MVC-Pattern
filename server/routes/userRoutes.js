const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const { login, signup } = userController;

router.post('/login', login);
router.post('/signup', signup);
// router.post('/logout', userController.logout);

module.exports = router;
