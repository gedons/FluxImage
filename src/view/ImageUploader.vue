<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-200">
    <div class="max-w-xl w-full mx-6">
      <div class="bg-white rounded-lg shadow-lg p-6 flex items-center justify-center">
        <h2 class="text-2xl font-bold mb-4 p-3">Upload</h2>
        <input type="file" @change="uploadImage" accept="image/*" class="mb-4">

      <div v-if="imageUrl">
        <img :src="imageUrl" alt="Uploaded Image" class="max-w-xs mx-auto mb-4">
        <button @click="analyzeImage" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Analyze Image</button>
        <div v-if="analysisResult" class="mt-2">
          <h3 class="text-lg font-bold">Analysis Result:</h3>
          <ul>
            <li v-for="label in analysisResult" :key="label.description">{{ label.description }}</li>
          </ul>
        </div>
      </div>
   
   </div>
  </div>
</div>
  
</template>

<script>
import { VisionClient } from '@google-cloud/vision';

const cloudApiKey = 'AIzaSyAhy2KmWLLpUUIgo3caZ16VtGsd60VFOWA';

export default {
  name: 'ImageUploader',
  data() {
    return {
      imageUrl: '',
      analysisResult: null
    };
  },
  methods: {
    uploadImage(event) {
      const file = event.target.files[0];
      this.imageUrl = URL.createObjectURL(file);
      this.analysisResult = null;
    },
    async analyzeImage() {
      // Create a new VisionClient instance.
      const visionClient = new VisionClient();

      // Set the VisionClient credentials with your cloud API key.
      visionClient.setCredentials({
        keyFilename: cloudApiKey,
      });

      // Get the uploaded image file.
      const file = this.imageUrl;

      // Create a new image annotation request.
      const request = {
        image: {
          content: await file.arrayBuffer(),
        },
        features: [{
          type: 'LABEL_DETECTION',
        }],
      };

      // Send the image annotation request to the Cloud Vision API.
      const response = await visionClient.annotateImage(request);

      // Get the image recognition results.
      const analysisResult = response.labelAnnotations;

      // Update the Vue.js data to display the image recognition results.
      this.analysisResult = analysisResult;
    }
  }
};
</script>


<style scoped>
input[type="file"] {
  margin-bottom: 10px;
}
</style>