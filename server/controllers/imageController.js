const { Storage } = require('@google-cloud/storage');

const storage = new Storage({
  projectId: 'project-rollings',
  keyFilename: './project-rollings-4e8812ca234b.json',
});

const bucketName = 'portfolio-nerdy'; 
const Image = require('../models/Image'); 

exports.uploadImage = async (req, res, next) => {
  try {
    const bucket = storage.bucket(bucketName);

    if (!req.file) {
      return res.status(400).json({ message: 'No image provided' });
    }

    const blob = bucket.file(req.file.originalname);
    const blobStream = blob.createWriteStream();

    blobStream.on('error', (err) => {
      console.error(err);
      return res.status(500).json({ message: `Error uploading image to GCS: ${err.message}` });
    });

    blobStream.on('finish', async () => {
      // The file has been uploaded successfully.
      const imageUrl = `https://storage.googleapis.com/${bucketName}/${blob.name}`;

      const { description, user_id } = req.body;


      // Create a new image document in the database
      const image = new Image({
        user_id,
        description,
        imageUrl, 
      });

      // Save the image document
      await image.save();

      res.status(200).json({ message: 'Image uploaded and saved successfully' });
    });

    blobStream.end(req.file.buffer);
  } catch (error) {
    console.error(error);
     res.status(500).json({ message: `Error uploading image and saving in the database: ${error.message}` });
  }
};
