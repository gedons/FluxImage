<template>
<!-- component -->
<section class="flex flex-col md:flex-row h-screen items-center">
	<div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
		<img src="https://source.unsplash.com/random" loading="lazy" alt="random image" class="w-full h-full object-cover">
	</div>
	<div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
		flex items-center justify-center">
		<div class="w-full h-100">
			<h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Login account</h1>
			<form class="mt-6" @submit.prevent="loginUser">							
				<div>
					<label class="block text-gray-700">Email Address</label>
					<input type="email" id="email" v-model="email" placeholder="Enter Email Address" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-violet-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
				</div>
				<div class="mt-4">
					<label class="block text-gray-700">Password</label>
					<input type="password" id="password" v-model="password" placeholder="Enter Password" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-violet-500
					focus:bg-white focus:outline-none" required>
				</div>
				<div class="text-right mt-2">
					<a href="#" class="text-sm font-semibold text-gray-700 hover:text-violet-700 focus:text-violet-700">Forgot Password?</a>
				</div>
				<button :disabled="loading" type="submit" class="flex justify-center items-center w-full block bg-violet-500 hover:bg-violet-400 focus:bg-violet-400 text-white font-semibold rounded-lg
				px-4 py-3 mt-6" 
							:class="{
                   'cursor-not-allowed': loading,
                   'hover:bg-violet-400': loading,
                 }">
						<svg v-if="loading" class="animate-spin mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
		              fill="none" viewBox="0 0 24 24">
		              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
		              <path class="opacity-75" fill="currentColor"
		                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
		              </path>
		         </svg>
			  Login</button>
			</form>
			<hr class="my-3 border-gray-300 w-full">
			<!-- <button type="button" class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
			<div class="flex items-center justify-center">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/></svg>
				<span class="ml-4">
					Log in with Google					
				</span>
			</div>
			</button> -->
			<p class="mt-4">Don't have an account? <router-link :to="{name: 'Register'}" class="text-violet-500 hover:text-violet-700 font-semibold">Register</router-link></p>
		</div>
	</div>
</section>
</template>

<script>
import axios from '../axios'; 

export default {
  data() {
    return {    
      email: '',
      password: '',
      loading: false,
    };
  },
	methods: {
	    loginUser() {
	    	this.loading = true;
	      this.$store.dispatch('login', { email: this.email, password: this.password })
	        .then((success) => {
	          if (success) {
	          	this.$toast.success('Login successful.', {
		            timeout: 3000, 
		          });
		          this.loading = false;
	            this.$router.push('/dashboard');
	          } else {
	             this.$toast.error('User details does not exist. Confirm and try again!', {
		            timeout: 9000, 
		          });
	             this.loading = false;
	          }
	        });
	    },
	  },
	};
</script>