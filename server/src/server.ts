// app.ts
import express from 'express';
import bodyParser from 'body-parser';
import userController from './controllers/userController';
import connectDB from './config/database';
import { config } from './config/config';


const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
connectDB().then(() => {
  // Routes
  app.post('/api/register', userController.register);
  app.post('/api/login', userController.login);

  // Start server
  const PORT = config.server.port;
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}).catch(err => {
  console.error(err);
  process.exit(1);
});
