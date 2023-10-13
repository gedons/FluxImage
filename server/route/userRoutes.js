const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Get user details
router.get('/profile', userController.getUserProfile);

// Update user information
router.put('/profile', userController.updateUserProfile);

// Delete user account
router.delete('/profile', userController.deleteUserAccount);

//Update user password
router.put('/updatePassword', userController.updateUserPassword);

module.exports = router;
