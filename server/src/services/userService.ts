// services/userService.ts
import User from '../models/user';
import bcrypt from 'bcrypt';

const registerUser = async (email: string, password: string): Promise<boolean> => {
  try {
    // Check if user already exists
    let user = await User.findOne({ email });

    if (user) {
      return false;
    }

    // Create new user
    user = new User({ email, password });

    // Hash password before saving
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    return true;
  } catch (err) {
    if(err instanceof Error){
        console.error(err.message);
     }

    throw new Error('Failed to register user');
  }
};

const findUserByEmail = async (email: string): Promise<User | null> => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (err) {
    if(err instanceof Error){
        console.error(err.message);
     }
    throw new Error('Failed to find user');
  }
};

export default {
  registerUser,
  findUserByEmail,
};
