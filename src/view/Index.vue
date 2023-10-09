<template>
  <section>
    <div class="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
      <div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <h1 class="text-5xl font-bold leadi sm:text-6xl">Unlock The
          <span class="text-violet-400">Power of</span> Image Recognition
        </h1>
        <p class="mt-6 mb-8 text-lg sm:mb-12">See the Unseen: Explore Images with 
          <br class="hidden md:inline lg:hidden">the Magic of AI-Powered Vision
        </p>
        <div class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          <router-link :to="{name: 'Authenticate'}" class="px-8 py-3 text-lg font-semibold rounded bg-violet-600 text-gray-200">Get Started</router-link>
          <!-- <a rel="noopener noreferrer" href="#" class="px-8 py-3 text-lg font-semibold border rounded border-gray-400 hover:text-violet-600">Malesuada</a> -->
        </div>
      </div>
      <div class="flex items-center justify-center p-6 lg:mr-12 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        <img src="../assets/Business_SVG.svg" alt="" class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
      </div>
    </div>
  </section>
</template>