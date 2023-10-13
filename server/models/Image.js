const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  imageUrl: {
    type: String,
    required: true, cd server
  },
  uploadDate: {
    type: Date,
    default: Date.now,
  },
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
