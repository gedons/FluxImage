const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('./config/config');

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Access denied, please log in' });
  }

  try {
    // Verify the token and decode its payload
    const decodedToken = jwt.verify(token, config.jwtSecret);

    // Check if the token has been revoked
    const user = await User.findById(decodedToken.userId);

    if (!user || user.revokedTokens.includes(token)) {
      return res.status(401).json({ message: 'Access denied, please log in' });
    }

    // Attach the user to the request object
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Invalid token' });
  }
};
