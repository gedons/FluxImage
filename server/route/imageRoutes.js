const express = require('express');
const router = express.Router();
const multer = require('multer');
const imageController = require('../controllers/imageController');
const { ImageAnnotatorClient } = require('@google-cloud/vision');
const Image = require('../models/Image');


const keyFilename = './project-rollings-235933cf7cf2.json';

// Create a new ImageAnnotatorClient with the specified credentials
const visionClient = new ImageAnnotatorClient({ keyFilename });

// Initialize google storage
const { Storage } = require('@google-cloud/storage');
const storage = new Storage({
  projectId: 'project-rollings',
  keyFilename: './project-rollings-235933cf7cf2.json',
});

//My bucket name
const bucketName = 'portfolio-nerdy'; 
  
// Multer middleware for handling file uploads
const upload = multer({ storage: multer.memoryStorage() });

// API route for image upload, save and analysze image
router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const bucket = storage.bucket(bucketName);   

    const blob = bucket.file(req.file.originalname);
    const blobStream = blob.createWriteStream();

    blobStream.on('error', (err) => {
      console.error(err);
      return res.status(500).json({ message: `Error uploading image to GCS: ${err.message}` });
    });

    blobStream.on('finish', async () => {
      const imageUrl = `https://storage.googleapis.com/${bucketName}/${blob.name}`;

      const { user_id } = req.body;

      const image = new Image({
        user_id,
        imageUrl,
      });
 
      //save user id and image url to database
      await image.save();

      // Perform image analysis with Google Cloud Vision      
      const [result] = await visionClient.annotateImage({
        image: { source: { imageUri: imageUrl } },
        features: [
          { type: 'LABEL_DETECTION' },
          { type: 'FACE_DETECTION' },
          { type: 'LOGO_DETECTION' },
          { type: 'LANDMARK_DETECTION' },
          { type: 'TEXT_DETECTION' },
        ],
      });

      // Process the analysis results as needed
      const labels = result.labelAnnotations;
      const faces = result.faceAnnotations;
      const logos = result.logoAnnotations;
      const landmarks = result.landmarkAnnotations;
      const texts = result.textAnnotations;

      // After receiving and processing analysis results
      image.analysisResults = {
        labels,
        faces,
        logos,
        landmarks,
        texts,
      };

       // Save the updated image with analysis results
      await image.save();

      return res.status(200).json({
        message: 'Image uploaded, saved, and analyzed successfully',
        labels,
        faces,
        logos,
        landmarks,
        texts,
      });
    });      

    blobStream.end(req.file.buffer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Error uploading image and saving in the database: ${error.message}` });
  }
});

// API route for view user uploaded image
router.get('/view/:user_id', async (req, res) => {

  try {  

    // Get the ID from the request parameters
    const user_id = req.params.user_id;

    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 4; 

    // Find all images associated with the user_id
    const images = await Image.find({ user_id })
      .sort({ uploadDate: -1 }) 
      .skip((page - 1) * pageSize)
      .limit(pageSize);
   

    return res.status(200).json(images);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Error fetching images: ${error.message}` });
  }
});

// Get the count of images for a specific user
router.get('/image-count/:user_id', async (req, res) => {
  try {
    const user_id = req.params.user_id;

    const imageCount = await Image.countDocuments({ user_id });

    res.json({ count: imageCount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error getting image count' });
  }
});

//Api route to delete user image
router.delete('/delete/:image_id', async (req, res) => {
 try {
    // Find the image in MongoDB
    const image = await Image.findById(req.params.image_id);

    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }

    const fileName = image.imageUrl.replace(`https://storage.googleapis.com/${bucketName}/`, '');
    await storage.bucket(bucketName).file(fileName).delete();

    // Delete the image from MongoDB
    await image.deleteOne();

    res.status(200).json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting image' });
  }
});


// Define a route to fetch analysis results
router.get('/analysis/:imageId', async (req, res) => {
  try {
    const imageId = req.params.imageId;

    // Fetch the image with the specified imageId
    const image = await Image.findById(imageId);


    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }

    // Check if the image has analysis results
    if (!image.analysisResults) {
      return res.status(404).json({ message: 'Analysis results not available for this image' });
    }

    // Extract the analysis results from the image and respond with them
    const analysisResults = image.analysisResults;
    
    // Include the image URL in the response
    const response = {
      imageUrl: image.imageUrl,
      analysisResults,
    };


    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching analysis results', error: error.message });
  }
});


// API route to fetch the latest uploaded image for the dashboard home
router.get('/dashboard/latest/:user_id', async (req, res) => {
  try {
    const user_id = req.params.user_id;
    const latestImage = await Image.findOne({user_id}).sort({ uploadDate: -1 });

    if (!latestImage) {
      return res.status(404).json({ message: 'No images found' });
    }
    res.status(200).json(latestImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching the latest image', error: error.message });
  }
});

module.exports = router;
