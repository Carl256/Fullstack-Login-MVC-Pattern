const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error('User not found');

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) throw new Error('Invalid password');

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.signup = async (userData) => {
  try {
    const { email, password,  } = userData;
    const user = await User.create({ email, password});
    return user;
  } catch (err) {
    console.error(err);
    throw new Error('Error creating user');
  }
};


exports.logout = async (req, res) => {
  try {
    // Get the token from the request header
    const token = req.header('Authorization').replace('Bearer ', '');
    
    // Verify and invalidate the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    decoded.exp = 0;
    
    // Send a response indicating successful logout
    res.status(200).send('Logout successful');
  } catch (error) {
    res.status(500).send(error.message);
  }
};
