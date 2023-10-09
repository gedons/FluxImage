const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRoutes = require('./route/userRoute');
const hankoAuthMiddleware = require('./middleware/hankoAuthMiddleware');

const app = express();
const corsOptions = {
  origin: 'http://localhost:5173', 
  credentials: true,
};
app.use(cors(corsOptions));
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://gedoni:blues0001153@cluster0.kiocya5.mongodb.net/users?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(hankoAuthMiddleware()); 

// Routes
app.use('/api/users', userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
