import mongoose from 'mongoose';
import { config } from "./config.js";

console.log('MONGO_URI:', config.mongo.url);

const connectDB = async () => {
  try {
    await mongoose.connect( config.mongo.url);
    console.log('MongoDB Connected');
  } catch (err) {
    if(err instanceof Error){
        console.error(err.message);
     }
    process.exit(1);
  }
};

export default connectDB;
