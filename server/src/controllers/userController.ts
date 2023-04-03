import { Request, Response } from 'express';
import userService from '../services/userService';
import bcrypt from 'bcrypt';

const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Check if user already exists
    const userExists = await userService.findUserByEmail(email);
    if (userExists) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Register user
    const registered = await userService.registerUser(email, password);
    if (!registered) {
      throw new Error('Failed to register user');
    }

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
    // Find user by email
    const user = await userService.findUserByEmail(email);
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Check password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // TODO: Return JWT token
    const token = 'dummy_token';
    res.json({ token });
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
};
