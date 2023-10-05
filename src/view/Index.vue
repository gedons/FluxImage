<template>
    <div class="bg-gray-200 min-h-screen flex items-center justify-center">
    <div class="bg-white rounded-lg shadow-lg p-6 max-w-xl flex mt-4">
      <div class="flex-shrink-0">
        <img src="../assets/vue.svg" alt="App Logo" class="h-12 w-12">
      </div>
      <div class="ml-4">
        <h1 class="text-2xl font-bold">Recognize</h1>
        <p class="text-gray-600 mt-2">This is a simple Image Recognition Web Application that enables users to upload images, and then uses AI image recognition to identify objects, people, or scenes within the images. This is integrated with Google Cloud Vision API.
        </p>
        <button class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><router-link :to="{name: 'ImageUploader'}">Get Started</router-link></button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Index'
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 24px;
  max-width: 400px;
}

.card img {
  height: 48px;
  width: 48px;
}

.card h1 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
}

.card p {
  color: #666;
  margin-top: 8px;
}

.card button {
  background-color: #4299e1;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin-top: 16px;
  font-weight: bold;
}
</style>