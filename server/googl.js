const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const session = require('express-session');
//const MongoStore = require('connect-mongo')(session);

const app = express();

// Allow requests from the specified origin 
const corsOptions = {
  origin: 'http://localhost:5173', 
  credentials: true, // Enable credentials (cookies, HTTP authentication)
};

// Use the 'cors' middleware with the specified options
app.use(cors(corsOptions));

// Connect to your MongoDB Atlas cluster (replace the connection string)
mongoose.connect('mongodb+srv://gedoni:blues0001153@cluster0.kiocya5.mongodb.net/users?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define User schema and model
const userSchema = new mongoose.Schema({
  googleId: String,
  displayName: String,
  // Add other user attributes as needed
});

const User = mongoose.model('User', userSchema);

// Passport configuration
passport.use(new GoogleStrategy({
    clientID: '915954403274-q11q99s0p12stroccr0j9kcvhuoornk8.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:3000/auth/google/callback',
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Find or create a user based on their Google ID
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      
      // Create a new user if one doesn't exist
      const newUser = new User({
        googleId: profile.id,
        displayName: profile.displayName,        
        // Add other user attributes as needed
      });
      await newUser.save();
      done(null, newUser);
    } catch (error) {
      done(error, null);
    }
  }
));

// Initialize Express app
app.use(require('express-session')({ secret: '1234567890qwertyuiopasdfghjklzxcvbnm', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

// Google OAuth routes
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Redirect to the dashboard after successful authentication
    res.redirect('http://localhost:5173/dashboard');
  }
);

// Route to fetch user data 
app.get('/api/user', (req, res) => {
  if (req.isAuthenticated()) {
    // Return user data if authenticated
    res.json(req.user);
  } else {
    // Return an empty object if not authenticated
    res.json({});
  }
});

// Route to sign out the user 
app.get('/auth/logout', (req, res) => {
   // Log the user out
  req.logout(() => {
    req.session.destroy()
    // Redirect the user to the login page
    res.redirect('http://localhost:5173/');
  });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});