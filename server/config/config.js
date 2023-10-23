const env = require('dotenv').config();

module.exports = {
  jwtSecret: process.env.JWT_SECRET,
  mongoURI: process.env.MONGO_URI,
  googleAppCredentials: process.env.GOOGLE_APPLICATION_CREDENTIALS,
};
