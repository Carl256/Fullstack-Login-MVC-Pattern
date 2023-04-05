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
        const { email, password } = req.body;
        const token = await userService.signup(email, password);
        res.status(200).json({ token });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
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

