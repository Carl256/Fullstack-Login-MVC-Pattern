const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserError = require('../services/errorHandlerService');

exports.login = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (!user) throw new UserError('User not found', 404);

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) throw new UserError('Invalid password', 401);
    
    if(user){
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      console.log("logged in successfully", );
      return token;
    }
  } catch (error) {
    throw new UserError(error.message);
  }
};

exports.signup = async (userData) => {
  try {
    const { email, password, } = userData;
    const user = await User.create({ email, password });
    return user;
  } catch (err) {
    throw new Error('Error creating user');
  }
};


exports.logout = async (req, res) => {
  try {
    // Get the token from the request header
    const token = req.header('Authorization').replace('Bearer ', '');

    // Verify and invalidate the token
    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    decoded.exp = 0;

    // Send a response indicating successful logout
    res.status(200).send('Logout successful');
  } catch (error) {
    res.status(500).send(error.message);
  }
};
