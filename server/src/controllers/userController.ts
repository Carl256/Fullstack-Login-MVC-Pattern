// controllers/userController.ts
import { Request, Response } from 'express';
import User from '../models/user';
import bcrypt from 'bcryptjs';

const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create new user
    user = new User({ email, password });

    // Hash password before saving
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    return res.json({ msg: 'User registered successfully' });
  } catch (err) {
    if(err instanceof Error){
        console.error(err.message);
     }
    return res.status(500).json({ msg: 'Server error' });
  }
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Return JWT token
    const token = 'dummy_token'; // Replace with actual JWT implementation
    res.json({ token });
  } catch (err) {
    if(err instanceof Error){
    console.error(err.message);
    }
    return res.status(500).json({ msg: 'Server error' });
  }
};

const getProfile = async (req: Request, res: Response) => {
  try {
    // Find user by ID and exclude password field from results
    const user = await User.findById(req.user.id).select('-password');

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    return res.json(user);
  } catch (err) {
    if(err instanceof Error){
    console.error(err.message);
    }
    return res.status(500).json({ msg: 'Server error' });
  }
};

export default {
  register,
  login,
  getProfile,
};
