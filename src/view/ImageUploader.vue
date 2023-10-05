<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-200">
    <div class="max-w-xl w-full mx-6">
      <div class="bg-white rounded-lg shadow-lg p-6 flex items-center justify-center">
        <h2 class="text-2xl font-bold mb-4 p-3">Upload</h2>

         <!-- Drag-and-drop area -->
	    <div
	      class="border-dashed border-2 border-gray-300 p-4 mb-4"
	      @dragover.prevent
	      @drop="handleDrop"
	    >
	      <p class="text-gray-600">Drag and drop an image here</p>
	    </div>

        <div>
		    <input type="file" ref="fileInput" @change="previewImage" accept="image/*">

		     <div v-if="imageUrl">
		      <h3>Image Preview:</h3>
		      <img :src="imageUrl" alt="Image Preview" style="max-width: 100%; height: 70px;">

		      <button @click="analyzeImage" :disabled="loading" class="bg-blue-500 hover:bg-blue-700 text-white mt-2 font-bold py-2 px-2 rounded"
		           :class="{
						  'cursor-not-allowed': loading						 
						}">
					<span v-if="loading">			        			        
			        Analyzing...
			      </span>
			      <span v-else>
			        Analyze
			      </span>		      	
		      </button>
		    </div>

		    

		    <div v-if="analysisResult">
		      <h3>Recognition Results:</h3>

		      <ul v-if="analysisResult.labels && analysisResult.labels.length">
		        <li v-for="(label, index) in analysisResult.labels" :key="index">{{ label.description }}</li>
		      </ul> 

		       <div v-if="analysisResult.textAnnotations && analysisResult.textAnnotations.length">
		        <h3>OCR Text:</h3>
		        <p>{{ analysisResult.textAnnotations[0].description }}</p>
		      </div> 

		       <div v-if="analysisResult.faces && analysisResult.faces.length">
		        <h3>Detected Faces:</h3>
		        <ul>
		          <li v-for="(face, index) in analysisResult.faces" :key="index">
		            <!-- Display face details as needed -->
		             	<p>Face {{ index + 1 }}</p>
			            <p>Joy: {{ face.joyLikelihood === 'VERY_LIKELY' ? 'Yes' : 'No' }}</p>
			            <!-- <p>Anger: {{ face.angerLikelihood === 'VERY_LIKELY' ? 'Yes' : 'No' }}</p> -->
			            <p>Sorrow: {{ face.sorrowLikelihood === 'VERY_LIKELY' ? 'Yes' : 'No' }}</p>
			            <p>Surprise: {{ face.surpriseLikelihood === 'VERY_LIKELY' ? 'Yes' : 'No' }}</p>
			            <!-- <p>Under Exposed: {{ face.underExposedLikelihood === 'VERY_LIKELY' ? 'Yes' : 'No' }}</p>
			            <p>Blurred: {{ face.blurredLikelihood === 'VERY_LIKELY' ? 'Yes' : 'No' }}</p>
			            <p>Headwear: {{ face.headwearLikelihood === 'VERY_LIKELY' ? 'Yes' : 'No' }}</p> -->
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
      imageUrl: '',
      analysisResult: null,
      loading: false,
    };
  },
   methods: {
    // Function to preview the selected image
    previewImage() {
      const fileInput = this.$refs.fileInput;
      const file = fileInput.files[0];
      this.imageUrl = URL.createObjectURL(file);
      this.analysisResult = null;
    },
    // Function to analyze the image
    async analyzeImage() {
      const fileInput = this.$refs.fileInput;
      const file = fileInput.files[0];

      if (!file) {
        return;
      }

       this.loading = true;

      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await axios.post('http://localhost:3000/api/images/upload', formData);
        // Handle the response (e.g., update the UI with recognition results)
        this.analysisResult = response.data;
      } catch (error) {
        console.error(error);
        // Handle error
      }finally {       
        this.loading = false;
      }
    },
     // Function to handle dropping an image onto the drop area
    handleDrop(event) {
      event.preventDefault();

      const file = event.dataTransfer.files[0];

      if (file && file.type.startsWith('image/')) {
        this.imageUrl = URL.createObjectURL(file);
        this.analysisResult = null;
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