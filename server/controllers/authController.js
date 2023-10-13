const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('../config/config');

exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  try {

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    //hash password and create new user
  	const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword  });
    await user.save();

    //respond with a success message
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ message: `User registration failed: ${error.message}` });
}
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'No user found' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Password incorrect' });
    }

    const token = jwt.sign({ email: user.email }, config.jwtSecret, {
      expiresIn: '1h',
    });

    res.status(200).json({
      message: 'Authentication successful',
      token: token,
      user: user,
    });
  } catch (err) {
    res.status(500).json({ message: `Internal server error' ${err.message}` });
  }
};
