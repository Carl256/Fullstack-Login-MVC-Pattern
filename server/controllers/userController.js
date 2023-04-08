const userService = require('../services/userService');

// destructure the functions from userService
const {login, signup } = userService

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await login(email, password);
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

exports.signup = async (req, res) => {
    try {
      const user = await signup(req.body);
      res.status(201).json({ success: true, message: 'User registered successfully' });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  };

