<template>
<!-- component -->
<section class="flex flex-col md:flex-row h-screen items-center">
	<div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
		<img src="https://source.unsplash.com/random" alt="" class="w-full h-full object-cover">
	</div>
	<div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
		flex items-center justify-center">
		<div class="w-full h-100">
			<h1 class="text-xl md:text-2xl leading-tight mt-12">Welcome!</h1>
			<div class="mt-6 font-semibold">
			  <hanko-events @onAuthFlowCompleted="redirectAfterLogin" />
  			<hanko-auth />
			</div>
		</div>
	</div>
</section>
</template>


<script setup>
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import { register } from "@teamhanko/hanko-elements";

const hankoApi = 'https://2a239619-abda-450f-8b85-12553d612e5c.hanko.io'
const router = useRouter();

const redirectAfterLogin = () => {
  // successfully logged in, redirect to a page in your application
  router.push({ name: "Dashboard" });
};

onMounted(() => {
  register(hankoApi)
    .catch((error) => {
     console.log(error)
    });
});
</script>