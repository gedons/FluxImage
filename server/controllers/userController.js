const User = require('../models/User');
const bcrypt = require('bcrypt'); 

// Get user details
exports.getUserProfile = async (req, res) => {
  
  const { email, username } = req.body;
  try {      

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'No user found' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: `Error retriving user profile:  ${error.message}` });
  }
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
  try {
    const { id, email, username } = req.body;
    
    // Find the user by id
    const user = await User.findOne({ id });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update email and username
    user.email = email;
    user.username = username;

    // Save the updated user
    await user.save();

    // Return the updated user data
    res.status(200).json(user);
  } catch (error) {
     res.status(500).json({ message: `Error updating user profile:  ${error.message}` });
  }
};

//Update user password
exports.updateUserPassword = async (req, res) => {
  try {
    const { id, currentPassword, newPassword } = req.body;
    // Find the user by id
    const user = await User.findOne({ id });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    try{     
      const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
    }catch(error){
       return res.status(401).json({ message: `Current password is incorrect: ${error.message}` });
    }
   
    // if (!isPasswordValid) {
    //   return res.status(401).json({ message: `Current password is incorrect: ${error.message}` });
    // }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password with the hashed new password
    user.password = hashedPassword;

    // Save the updated user with the new password
    await user.save();

    // Return a success message
    res.status(200).json({ message: 'Password updated successfully',  user: user });
  } catch (error) {
    // Handle any errors
    console.error('Error updating user password:', error);
    res.status(500).json({ message: `Internal server error: ${error.message}` });
  }
};


// Delete user account
exports.deleteUserAccount = async (req, res) => {
  try {
    // Retrieve user details based on the authenticated user (e.g., from req.user)
    const user = req.user;

    // Delete the user's account
    await user.remove();
    res.status(200).json({ message: 'User account deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user account' });
  }
};
