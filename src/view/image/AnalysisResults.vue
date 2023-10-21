<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-8 w-8" src="/logo.svg"
                alt="Your Company" />
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <router-link v-for="item in navigation" :key="item.name" :to="item.to"
                  active-class="bg-violet-800 text-white"
                  :class="[this.$route.name === item.to.name ? '' : 'text-gray-100  hover:bg-violet-800 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']">{{
                    item.name }}</router-link>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <Menu as="div" class="relative ml-3">
                <div>
                  <MenuButton
                    class="flex max-w-xs items-center rounded-full bg-violet-900 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-600">
                    <a @click="logout"
                      :class="['block px-4 py-2 text-sm text-gray-100 hover:text-white font-medium cursor-pointer']">End Session</a>
                  </MenuButton>
                </div>

              </Menu>

              <!-- Profile dropdown -->
              <Menu as="div" class="relative ml-3">
                <div>
                  <MenuButton
                    class="flex max-w-xs items-center rounded-full bg-violet-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-600">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full" :src="details.imageUrl" alt="" />
                  </MenuButton>
                </div>
                <transition enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95">
                  <MenuItems
                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                    <router-link :to="item.to"
                      :class="[active ? 'bg-violet-100' : '', 'block px-4 py-2 text-sm text-gray-900 hover:text-violet-600']">{{ item.name }}</router-link>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="inline-flex items-center justify-center rounded-md bg-violet-800 p-2 text-white hover:bg-violet-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-800">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="md:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <router-link v-for="item in navigation" :key="item.name" :to="item.to" active-class="bg-violet-900 text-white"
            :class="[this.$route.name === item.to.name ? '' : 'text-violet-300 hover:bg-violet-900 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']">{{
              item.name }}</router-link>
        </div>
        <div class="border-t border-violet-700 pb-3 pt-4">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" :src="details.imageUrl" alt="" />
            </div>                  
          </div>
          <div class="mt-3 space-y-1 px-2">
            <DisclosureButton v-for="item in userNavigation" :key="item.name" as="a" :to="item.to" active-class="bg-violet-900"
              class="block rounded-md px-3 py-2 text-base font-medium text-violet-300 hover:bg-violet-900 hover:text-white">{{
                item.name }}</DisclosureButton>        
          </div>
          <Menu as="div" class="relative ml-3">
            <div>
              <MenuButton
                class="flex max-w-xs items-center rounded-full bg-violet-900 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-800 mt-4">
                <a @click="logout"
                  :class="['block px-4 py-2 text-sm text-white hover:text-white font-medium cursor-pointer']">End Session</a>
              </MenuButton>
            </div>
          </Menu>
        </div>
      </DisclosurePanel>
    </Disclosure>
    <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center">
            <h1 class="text-3xl font-bold tracking-tight text-gray-900">Analysis Result</h1>
            <router-link :to="{name: 'Images'}" class="flex py-2 px-4 border border-transparent text-sm rounded-md text-white bg-violet-800 hover:bg-violet-700 focus:ring-2 font-semibold focus:ring-offset-2 focus:ring-indigo-500">
                 Back
              </router-link>        
          </div>
        </div>
    </header>

      <main class="bg-gray-50">
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">   
            <!--   <div v-if="loading"  class="flex justify-center">
                      <svg  class="animate-spin text-center  h-8 w-8 text-violet-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
              </div>   -->     
              <div>

                <!-- <div class="bg-white flex justify-center items-center shadow-sm    animate-fade-in-down h-20">
                    <p class="font-semibold">Analysis not performed on this image</p>                   
                </div> -->

				   <div>
				    
				    <div v-if="analysisResults">				    
				    	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full">
						  <div  v-if="analysisResults.labels && analysisResults.labels.length" class="relative mx-auto w-full">
							<a href="#" class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
							  <div class="shadow p-4 rounded-lg bg-white">
								<div class="flex justify-center relative rounded-lg overflow-hidden h-52">
								  <div class="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
									<img :src="imageUrl" class="absolute inset-0 bg-black opacity-40"/>
								  </div>

								  <div class="absolute flex justify-center bottom-0 mb-3">
									<div class="flex bg-white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow">
									  <p class="flex items-center font-medium text-gray-800">
										<svg class="w-5 h-5 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480,226.15V80a48,48,0,0,0-48-48H80A48,48,0,0,0,32,80V226.15C13.74,231,0,246.89,0,266.67V472a8,8,0,0,0,8,8H24a8,8,0,0,0,8-8V416H480v56a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V266.67C512,246.89,498.26,231,480,226.15ZM64,192a32,32,0,0,1,32-32H208a32,32,0,0,1,32,32v32H64Zm384,32H272V192a32,32,0,0,1,32-32H416a32,32,0,0,1,32,32ZM80,64H432a16,16,0,0,1,16,16v56.9a63.27,63.27,0,0,0-32-8.9H304a63.9,63.9,0,0,0-48,21.71A63.9,63.9,0,0,0,208,128H96a63.27,63.27,0,0,0-32,8.9V80A16,16,0,0,1,80,64ZM32,384V266.67A10.69,10.69,0,0,1,42.67,256H469.33A10.69,10.69,0,0,1,480,266.67V384Z"></path></svg>
										image preview
									  </p>
									</div>
								  </div>

								  <span class="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 text-violet-900 text-sm font-medium  select-none">
									Label Analysis
								  </span>
								</div>

								<div class="mt-4">
								  <h2 class="font-medium text-base md:text-lg text-gray-800 line-clamp-1" title="New York">
									Score
								  </h2>
								  
								  <div>
									<div v-for="(label, index) in analysisResults.labels" :key="index">
									      <div class="w-full">
									        <p class="font-semibold text-xs mt-2">{{ label.description }}</p>
									        <div class="shadow w-full bg-grey-light mt-2">
									          <div
									            :class="getProgressBarColor(label.score)"
									            class="text-xs font-semibold py-0 leading-none text-center text-white"
									            :style="`width: ${label.score * 100}%`"
									          >
									            {{ (label.score * 100).toFixed(0) }}%
									          </div>
									        </div>
									      </div>
									</div>
								  </div>

								</div>								 							
							  </div>
							</a>
						  </div>

						  <div  v-if="analysisResults.faces && analysisResults.faces.length" class="relative mx-auto w-full">
							<a href="#" class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
							  <div class="shadow p-4 rounded-lg bg-white">
								<div class="flex justify-center relative rounded-lg overflow-hidden h-52">
								  <div class="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
									<img :src="imageUrl" class="absolute inset-0 bg-black opacity-40"/>
								  </div>

								  <div class="absolute flex justify-center bottom-0 mb-3">
									<div class="flex bg-white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow">
									  <p class="flex items-center font-medium text-gray-800">
										<svg class="w-5 h-5 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480,226.15V80a48,48,0,0,0-48-48H80A48,48,0,0,0,32,80V226.15C13.74,231,0,246.89,0,266.67V472a8,8,0,0,0,8,8H24a8,8,0,0,0,8-8V416H480v56a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V266.67C512,246.89,498.26,231,480,226.15ZM64,192a32,32,0,0,1,32-32H208a32,32,0,0,1,32,32v32H64Zm384,32H272V192a32,32,0,0,1,32-32H416a32,32,0,0,1,32,32ZM80,64H432a16,16,0,0,1,16,16v56.9a63.27,63.27,0,0,0-32-8.9H304a63.9,63.9,0,0,0-48,21.71A63.9,63.9,0,0,0,208,128H96a63.27,63.27,0,0,0-32,8.9V80A16,16,0,0,1,80,64ZM32,384V266.67A10.69,10.69,0,0,1,42.67,256H469.33A10.69,10.69,0,0,1,480,266.67V384Z"></path></svg>
										image preview
									  </p>

									</div>
								  </div>

								  <span class="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 text-violet-900 text-sm font-medium  select-none">
									Face Mood
								  </span>
								</div>

								<div class="mt-4">								  
								  <div>
									<div class="font-semibold text-sm" v-for="(face, index) in analysisResults.faces" :key="index">
								            <p class="py-2">Joy: {{ face.joyLikelihood === 'VERY_LIKELY' ? 'Yes' : 'No' }}</p>
								            <p class="py-2">Anger: {{ face.angerLikelihood === 'VERY_LIKELY' ? 'Yes' : 'No' }}</p>
								            <p class="py-2">Sorrow: {{ face.sorrowLikelihood === 'VERY_LIKELY' ? 'Yes' : 'No' }}</p>
								            <p class="py-2">Surprise: {{ face.surpriseLikelihood === 'VERY_LIKELY' ? 'Yes' : 'No' }}</p>
								             <p class="py-2">Under Exposed: {{ face.underExposedLikelihood === 'VERY_LIKELY' ? 'Yes' : 'No' }}</p>
								            <p class="py-2">Blurred: {{ face.blurredLikelihood === 'VERY_LIKELY' ? 'Yes' : 'No' }}</p>
								            <p class="py-2">Headwear: {{ face.headwearLikelihood === 'VERY_LIKELY' ? 'Yes' : 'No' }}</p>
									</div>
								  </div>

								</div>								 							
							  </div>
							</a>
						  </div>

						   <div  v-if="analysisResults.texts && analysisResults.texts.length" class="relative mx-auto w-full">
							<a href="#" class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
							  <div class="shadow p-4 rounded-lg bg-white">
								<div class="flex justify-center relative rounded-lg overflow-hidden h-52">
								  <div class="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
									<img :src="imageUrl" class="absolute inset-0 bg-black opacity-40"/>
								  </div>

								  <div class="absolute flex justify-center bottom-0 mb-3">
									<div class="flex bg-white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow">
									  <p class="flex items-center font-medium text-gray-800">
										<svg class="w-5 h-5 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480,226.15V80a48,48,0,0,0-48-48H80A48,48,0,0,0,32,80V226.15C13.74,231,0,246.89,0,266.67V472a8,8,0,0,0,8,8H24a8,8,0,0,0,8-8V416H480v56a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V266.67C512,246.89,498.26,231,480,226.15ZM64,192a32,32,0,0,1,32-32H208a32,32,0,0,1,32,32v32H64Zm384,32H272V192a32,32,0,0,1,32-32H416a32,32,0,0,1,32,32ZM80,64H432a16,16,0,0,1,16,16v56.9a63.27,63.27,0,0,0-32-8.9H304a63.9,63.9,0,0,0-48,21.71A63.9,63.9,0,0,0,208,128H96a63.27,63.27,0,0,0-32,8.9V80A16,16,0,0,1,80,64ZM32,384V266.67A10.69,10.69,0,0,1,42.67,256H469.33A10.69,10.69,0,0,1,480,266.67V384Z"></path></svg>
										image preview
									  </p>

									</div>
								  </div>

								  <span class="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 text-violet-900 text-sm font-medium  select-none">
									Extracted Text
								  </span>
								</div>

								<div class="mt-4">								  
								  <div>
									<div class="font-semibold text-sm">
								            <p>{{ analysisResults.texts[0].description }}</p>
									</div>
								  </div>

								</div>								 							
							  </div>
							</a>
						  </div>

						  <div  v-if="analysisResults.logos && analysisResults.logos.length" class="relative mx-auto w-full">
							<a href="#" class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
							  <div class="shadow p-4 rounded-lg bg-white">
								<div class="flex justify-center relative rounded-lg overflow-hidden h-52">
								  <div class="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
									<img :src="imageUrl" class="absolute inset-0 bg-black opacity-40"/>
								  </div>

								  <div class="absolute flex justify-center bottom-0 mb-3">
									<div class="flex bg-white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow">

									  <p class="flex items-center font-medium text-gray-800">
										<svg class="w-5 h-5 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480,226.15V80a48,48,0,0,0-48-48H80A48,48,0,0,0,32,80V226.15C13.74,231,0,246.89,0,266.67V472a8,8,0,0,0,8,8H24a8,8,0,0,0,8-8V416H480v56a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V266.67C512,246.89,498.26,231,480,226.15ZM64,192a32,32,0,0,1,32-32H208a32,32,0,0,1,32,32v32H64Zm384,32H272V192a32,32,0,0,1,32-32H416a32,32,0,0,1,32,32ZM80,64H432a16,16,0,0,1,16,16v56.9a63.27,63.27,0,0,0-32-8.9H304a63.9,63.9,0,0,0-48,21.71A63.9,63.9,0,0,0,208,128H96a63.27,63.27,0,0,0-32,8.9V80A16,16,0,0,1,80,64ZM32,384V266.67A10.69,10.69,0,0,1,42.67,256H469.33A10.69,10.69,0,0,1,480,266.67V384Z"></path></svg>
										image preview
									  </p>
									</div>
								  </div>

								  <span class="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 text-violet-900 text-sm font-medium  select-none">
									Logo
								  </span>
								</div>

								<div class="mt-4">								  
								  <div>
									<div class="font-semibold text-sm">
								            <p>Logo Name: {{ analysisResults.logos[0].description }}</p>
									</div>
								  </div>

								</div>								 							
							  </div>
							</a>
						  </div>

						  <div  v-if="analysisResults.landmarks && analysisResults.landmarks.length" class="relative mx-auto w-full">
							<a href="#" class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
							  <div class="shadow p-4 rounded-lg bg-white">
								<div class="flex justify-center relative rounded-lg overflow-hidden h-52">
								  <div class="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
									<img :src="analysisResults.imageUrl" class="absolute inset-0 bg-black opacity-40"/>
								  </div>

								  <div class="absolute flex justify-center bottom-0 mb-3">
									<div class="flex bg-white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow">
									  <p class="flex items-center font-medium text-gray-800">
										<svg class="w-5 h-5 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480,226.15V80a48,48,0,0,0-48-48H80A48,48,0,0,0,32,80V226.15C13.74,231,0,246.89,0,266.67V472a8,8,0,0,0,8,8H24a8,8,0,0,0,8-8V416H480v56a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V266.67C512,246.89,498.26,231,480,226.15ZM64,192a32,32,0,0,1,32-32H208a32,32,0,0,1,32,32v32H64Zm384,32H272V192a32,32,0,0,1,32-32H416a32,32,0,0,1,32,32ZM80,64H432a16,16,0,0,1,16,16v56.9a63.27,63.27,0,0,0-32-8.9H304a63.9,63.9,0,0,0-48,21.71A63.9,63.9,0,0,0,208,128H96a63.27,63.27,0,0,0-32,8.9V80A16,16,0,0,1,80,64ZM32,384V266.67A10.69,10.69,0,0,1,42.67,256H469.33A10.69,10.69,0,0,1,480,266.67V384Z"></path></svg>
										image preview
									  </p>

									 
									</div>
								  </div>

								  <span class="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 text-violet-900 text-sm font-medium  select-none">
									Landmark Detection
								  </span>
								</div>

								<div class="mt-4">								  
								  <div>
									 <div v-for="(landmark, index) in analysisResults.landmarks" :key="index">
									      <div class="w-full">
									        <p class="font-semibold text-xs mt-2">{{ landmark.description }}</p>
									        <div class="shadow w-full bg-grey-light mt-2">
									          <div
									            :class="getProgressBarColor(landmark.score)"
									            class="text-xs font-semibold leading-none py-0 text-center text-white"
									            :style="`width: ${landmark.score * 100}%`"
									          >
									            {{ (landmark.score * 100).toFixed(0) }}%
									          </div>
									        </div>
									      </div>
									    </div>
								  </div>

								</div>								 							
							  </div>
							</a>
						  </div>

						</div>


				    </div>
				  </div>            	              
              </div>
          </div> 
        
      </main>
</template>


<script>
  import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
  import { PencilIcon, PlusIcon, ExclamationTriangleIcon, InformationCircleIcon  } from '@heroicons/vue/24/outline';
  import { Bars3Icon, BellIcon, XMarkIcon, LinkIcon } from '@heroicons/vue/24/outline';
  import { ChevronDownIcon } from '@heroicons/vue/20/solid'
  import { useStore } from "vuex";
  import axios from 'axios';
  import moment from 'moment';
  import { computed, ref } from "vue";
  import { useRouter } from "vue-router";


const details = {
  imageUrl:
    '/user.svg',
}
const navigation = [
  { name: 'Dashboard', to: { name: 'Dashboard' } },
  { name: 'Images', to: { name: 'Images' } },
  { name: 'Upload Image', to: { name: 'ImageUpload' } },
];

const userNavigation = [
  { name: 'Your Profile', to: {name: 'UserProfile'} },
  { name: 'Settings', to: {name: 'UserSettings'} },
  
];

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    XMarkIcon,
    LinkIcon,
    Bars3Icon,
    Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot,
    ExclamationTriangleIcon, ChevronDownIcon, InformationCircleIcon 
  },

  data() {
    return {
       analysisResults: null,
       imageUrl: '',
       currentLabel: null,
       circumference: 2 * Math.PI * 120,
       loading: true,
       page: 1,
       pageSize: 6,
       showModal: false,
     };
  },

  created() {
    this.fetchAnalysisResults();
  },

  methods: {
    formatDate(date) {
      return moment(date).fromNow();
    },        

    async fetchAnalysisResults() {
      const imageId = this.$route.params.imageId;
      try {
        // Make an API request to fetch the analysis results
        const response = await axios.get(`http://localhost:3000/api/image/analysis/${imageId}`);

        // Assign the results to this.analysisResults
        this.analysisResults = response.data.analysisResults;
        this.imageUrl = response.data.imageUrl;
      } catch (error) {
        console.error(error);
      }
    },

    setCurrentLabel(label) {
      this.currentLabel = label;
    },

    getProgressBarColor(score) {
      if (score >= 0.75) {
        return 'bg-violet-800';
      } else if (score >= 0.65) {
        return 'bg-violet-700';
      } else if (score >= 0.55) {
        return 'bg-violet-500';
      } else {
        return 'bg-violet-500';
      }
    },

  },

  setup() {
    const store = useStore();
    const router = useRouter();
    

    function logout() {
      store.dispatch("logout").then(() => {
        router.push({
          name: "Index",
        });
      });
    }

    return {     
      details,
      navigation,
      userNavigation,
      logout
    };
  },

  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    currentUser() {
      return this.$store.getters.currentUser;
    }     
  },
};
</script>
