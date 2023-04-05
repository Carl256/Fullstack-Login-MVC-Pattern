const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config({ path: './.env' });

// get the uri from the .env file
const uri = process.env.MONGODB_URI;
console.log(uri);

// Routes
const userRoutes = require('./routes/userRoutes');
const passwordRoutes = require('./routes/passwordRoutes');


// Middlewares
app.use(express.json());
app.use(cors());

// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.log(err));

// Routes middleware
app.use('/api/', userRoutes);
app.use('/api/', passwordRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
