
// config/database.ts
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log('MongoDB Connected');
  } catch (err) {
    if (err instanceof Error) {
    console.error(err.message);
    process.exit(1);
    }
  }
};

mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});

export default connectDB;

