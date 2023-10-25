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
          <router-link :to="{name: 'Register'}" class="px-8 py-3 text-lg font-semibold rounded bg-violet-600 text-gray-200">Get Started</router-link>
          <!-- <a rel="noopener noreferrer" href="#" class="px-8 py-3 text-lg font-semibold border rounded border-gray-400 hover:text-violet-600">Malesuada</a> -->
        </div>
      </div>
      <div class="flex items-center justify-center p-6 lg:mr-12 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        <img src="../assets/Business_SVG.svg" alt="" class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
      </div>
    </div>
  </section>

  <section>
    <div class="container max-w-5xl px-4 py-12 mx-auto">
      <div class="grid gap-4 mx-4 sm:grid-cols-12">
        <div class="col-span-12 sm:col-span-3">
          <div class="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-600">
            <h3 class="text-3xl font-semibold">App features</h3>
            <span class="text-sm font-bold tracki uppercase text-violet-400">discovery and analysis</span>
          </div>
        </div>
        <div class="relative col-span-12 px-4 space-y-6 sm:col-span-9">
          <div class="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
            <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600">
              <h3 class="text-xl font-semibold tracki">Label Detection</h3>
              <p class="mt-3">Curious about the content of your images? Let Google Vision's Label Detection reveal the objects and concepts present in your visuals. It's like having an intelligent assistant that understands the world within your photos.</p>
            </div>
            <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600">
              <h3 class="text-xl font-semibold tracki">Face Detection</h3>
              <p class="mt-3">Uncover the faces hidden in your images. Our Face Detection feature recognizes faces and can even provide insights into emotions, ages, and more. Share the joy or excitement captured in your photos like never before.</p>
            </div>
            <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600">
              <h3 class="text-xl font-semibold tracki">Logo Detection</h3>
              <p class="mt-3">Explore the world of branding with our Logo Detection feature. Discover familiar logos and brands within your images, creating a unique perspective on the products and companies around you.</p>
            </div>
            <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600">
              <h3 class="text-xl font-semibold tracki">Text Detection:</h3>
              <p class="mt-3">Transform text from your images into actionable insights. Extract information, translate text, or simply preserve handwritten notes for future reference.</p>
            </div>
            <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600">
              <h3 class="text-xl font-semibold tracki">Landmark Detection:</h3>
              <p class="mt-3">Do your images hold the secrets of famous landmarks and locations? Our Landmark Detection feature unlocks the stories behind these iconic sites, revealing their names and historical significance.</p>
            </div>
            <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600">
              <h3 class="text-xl font-semibold tracki">Intuitive Dashboard</h3>
              <p class="mt-3">Easily access your image analyses and view the results right from your personalized dashboard. Stay organized and in control of your visual content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="bg-white">
  <div class="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
    <div class="text-center">
      <h2 class="text-3xl font-extrabold text-gray-900 sm:text-5xl">
        Flux Image
      </h2>

      <p class="mx-auto mt-4 max-w-sm text-gray-500">
        Join us on this exciting journey of visual discovery and analysis. Try our app today and unlock the hidden potential within your images!
      </p>

      <router-link :to="{name: 'Login'}" 
        class="mt-8 inline-block rounded-full border border-violet-600 px-12 py-3 text-sm font-medium text-violet-600 hover:bg-violet-600 hover:text-white focus:outline-none focus:ring active:bg-violet-500"
      >
        Sign In
      </router-link>
    </div>

    <div
      class="mt-16 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24"
    >
      <ul class="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
        <li>
          <a href="#" class="text-gray-500 transition hover:opacity-75">
            Terms & Conditions
          </a>
        </li>

        <li>
          <a href="#" class="text-gray-500 transition hover:opacity-75">
            Privacy Policy
          </a>
        </li>

        <li>
          <a href="#" class="text-gray-500 transition hover:opacity-75">
            Cookies
          </a>
        </li>
      </ul>

      <ul class="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
        <li>
          <a
            href="https://www.twitter.com/nerdyGedoni"
            rel="noreferrer"
            target="_blank"
            class="text-gray-700 transition hover:opacity-75"
          >
            <span class="sr-only">Twitter</span>

            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="https://www.github.com/gedons"
            rel="noreferrer"
            target="_blank"
            class="text-gray-700 transition hover:opacity-75"
          >
            <span class="sr-only">GitHub</span>

            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>

      </ul>
    </div>
  </div>
</footer>
</template>