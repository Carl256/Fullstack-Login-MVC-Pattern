const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const { AuthErrors } = require("../../utils/errorHandlers/authErrors");
const { loginSanitizationRules } = require("../sanitazation/sanitizeInput");
const { validationResult } = require("express-validator");

// Generate a JWT token for the user
const generateToken = (user) => {
  // logic to generate JWT token for authenticated user
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "15m",
    algorithm: "HS256",
  });
  return token;
};

exports.authenticateUserLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw AuthErrors.badRequest(errors.msg);
    }

    // Find user with matching email
    const user = await User.findOne({ email });

    // Check if user exists
    if (!user) {
      throw AuthErrors.userNotFound("User not found");
    }

    // Check if user's password matches hashed password in database
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw AuthErrors.invalidPassword("Invalid password");
    }

    // return the information including token as JSON
    const token = generateToken(user);
    return res.status(200).json({ token });
  } catch (error) {
    next(error);
    return;
  }
};

exports.authenticateUserSignup = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw AuthErrors.badRequest(errors.msg);
    }

    // Check if user already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      throw AuthErrors.userExists("User already exists");
    }

    if (!userExists) {
      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create new user
      const user = new User({
        email,
        password: hashedPassword,
      });

      // Save user to database
      await user.save();

      // retun success message
      return res
        .status(201)
        .json({ success: true, message: "User registered successfully" });
    }
  } catch (error) {
    // handle errors
    return next(error);
  }
};

exports.sanitizeLoginInput = loginSanitizationRules();
