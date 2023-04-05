const userService = require('../services/userService');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await userService.login(email, password);
    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

exports.signup = async (req, res) => {
    try {
      const user = await userService.signup(req.body);
      res.status(201).json({ success: true, message: 'User registered successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  };

exports.logout = async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await userService.logout(email, password);
        res.status(200).json({ token });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
    }

