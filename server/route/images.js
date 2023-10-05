const express = require('express');
const router = express.Router();
const { ImageAnnotatorClient } = require('@google-cloud/vision');
const multer = require('multer');
const fs = require('fs');

// Configure multer for handling image uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Specify the path to your service account key JSON file
const keyFilename = './project-rollings-4e8812ca234b.json';

// Create a new ImageAnnotatorClient with the specified credentials
const visionClient = new ImageAnnotatorClient({ keyFilename });



// Route to upload an image and perform recognition
router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    
    if (!req.file) {
      return res.status(400).json({ message: 'No image file provided.' });
    }

    const imageBuffer = req.file.buffer;

     // Create a new image annotation request
    const [result] = await visionClient.annotateImage({
      image: { content: imageBuffer },
      features: [
      	{ type: 'LABEL_DETECTION' },
	    { type: 'FACE_DETECTION' },
	    { type: 'LOGO_DETECTION' },
	    { type: 'LANDMARK_DETECTION' },
	    { type: 'TEXT_DETECTION' }, 
      ],
    });

    // Get the image recognition results
    const labels = result.labelAnnotations; 
    const textAnnotations = result.textAnnotations;
    

    // Create a response object containing both label and text recognition results
    const response = {
      labels,
      textAnnotations,
    };

     res.status(200).json(response);
  } 
  catch (error) {
     console.error('Error:', error);

    // Handle the error and provide an appropriate response
    res.status(500).json({ error: 'Server error', details: error.message });
  }
});

module.exports = router;
