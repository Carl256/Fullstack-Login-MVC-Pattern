// const passwordService = require('../services/passwordService');

// exports.forgotPassword = async (req, res) => {
//   const { email } = req.body;
//   try {
//     await passwordService.sendPasswordResetEmail(email);
//     res.status(200).json({
//       message: 'Password reset email sent',
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: 'Error sending password reset email',
//       error: error.message,
//     });
//   }
// };

// exports.resetPassword = async (req, res) => {
//   const { token, password } = req.body;
//   try {
//     await passwordService.resetPassword(token, password);
//     res.status(200).json({
//       message: 'Password reset successful',
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: 'Error resetting password',
//       error: error.message,
//     });
//   }
// };
