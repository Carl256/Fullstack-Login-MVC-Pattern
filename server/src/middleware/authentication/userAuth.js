const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const { AuthErrors } = require("../../utils/errorHandlers/authErrors");
const { loginSanitizationRules } = require("../sanitazation/sanitizeInput");
const { validationResult, Result } = require("express-validator");
const nodemailer = require("nodemailer");

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
    
    // if the passwords don't match, throw an error
    if (!passwordMatch) {
      console.log(passwordMatch)
      throw AuthErrors.invalidPassword("Invalid password");
    }

    // Create a token
    if (passwordMatch) {
    const token = generateToken(user);
    return res.status(200).json({ token });
    }

  } catch (error) {
    // Handle errors
    return next(error);
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

exports.resetUserPassword = async (req, res, next) => {
  // create a new password reset token
  // send email to user with password reset link
  // user clicks link and is redirected to password reset page
  // user enters new password and submits
  // password is updated in database
  // user is redirected to login page
  // user logs in with new password
  // user is redirected to dashboard

  try {
    // get user's email from request body
    const { email } = req.body;

    // check if user exists
    const userExists = await User.findOne({ email });

    // if user doesn't exist, throw an error
    if (!userExists) {
      throw AuthErrors.userNotFound("User not found");
    }



    // if user exists, create a new password reset token
    const passwordResetToken = jwt.sign(
      { userId: userExists._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "15m",
        algorithm: "HS256",
      }
    );

    // send email to user with password reset link
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: email,
      subject: "Password Reset",
      text: `Click the link below to reset your password: \n\n
      http://localhost:3000/reset-password/${passwordResetToken}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        throw AuthErrors.badRequest("Error sending email");
      } else {
        console.log("Email sent: " + info.response);
      }
    }
    );

    // return success message
    return res.status(200).json({
      success: true,
      message: "Password reset link sent to email",
    });
    
  } catch (error) {
    return next(error);
  }
};


exports.sanitizeLoginInput = loginSanitizationRules();