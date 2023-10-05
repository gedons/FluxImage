<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-200">
    <div class="max-w-xl w-full mx-6">
      <div class="bg-white rounded-lg shadow-lg p-6 flex items-center justify-center">
        <h2 class="text-2xl font-bold mb-4 p-3">Upload</h2>
        <div>
		    <input type="file" @change="uploadImage" accept="image/*">
		    <div v-if="analysisResult">
		      <h3>Recognition Results:</h3>

		      <!--  <ul v-if="analysisResult.labels && analysisResult.labels.length">
		        <li v-for="(label, index) in analysisResult.labels" :key="index">{{ label.description }}</li>
		      </ul> -->

		       <!-- <div v-if="analysisResult.textAnnotations && analysisResult.textAnnotations.length">
		        <h3>OCR Text:</h3>
		        <p>{{ analysisResult.textAnnotations[0].description }}</p>
		      </div> -->

		       <div v-if="analysisResult.faces && analysisResult.faces.length">
		        <h3>Detected Faces:</h3>
		        <ul>
		          <li v-for="(face, index) in analysisResult.faces" :key="index">
		            <!-- Display face details as needed -->
		             	<p>Face {{ index + 1 }}</p>
			            <p>Joy: {{ face.joyLikelihood === 'VERY_LIKELY' ? 'Yes' : 'No' }}</p>
			            <p>Anger: {{ face.angerLikelihood === 'VERY_LIKELY' ? 'Yes' : 'No' }}</p>
			            <p>Sorrow: {{ face.sorrowLikelihood === 'VERY_LIKELY' ? 'Yes' : 'No' }}</p>
			            <p>Surprise: {{ face.surpriseLikelihood === 'VERY_LIKELY' ? 'Yes' : 'No' }}</p>
			            <p>Under Exposed: {{ face.underExposedLikelihood === 'VERY_LIKELY' ? 'Yes' : 'No' }}</p>
			            <p>Blurred: {{ face.blurredLikelihood === 'VERY_LIKELY' ? 'Yes' : 'No' }}</p>
			            <p>Headwear: {{ face.headwearLikelihood === 'VERY_LIKELY' ? 'Yes' : 'No' }}</p>
		          </li>
		        </ul>
		      </div>

		    </div>
	  </div>
   
   </div>
  </div>
</div>
  
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      analysisResult: null
    };
  },
  methods: {
    async uploadImage(event) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await axios.post('http://localhost:3000/api/images/upload', formData);

        // Handle the response (e.g., update the UI with recognition results)
        this.analysisResult = response.data;
      } catch (error) {
        console.error(error);        
      }
    },
  },
};
</script>


<style scoped>
input[type="file"] {
  margin-bottom: 10px;
}
</style>