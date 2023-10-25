<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-8 w-8" loading="lazy" src="/logo.svg"
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
                    <img class="h-8 w-8 rounded-full" loading="lazy" :src="details.imageUrl" alt="" />
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
              <img class="h-10 w-10 rounded-full" loading="lazy" :src="details.imageUrl" alt="" />
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
            <h1 class="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
            <div>
              <p class="font-semibold">Welcome</p>
              <!-- Add other dashboard content and features here -->
            </div>          
          </div>
        </div>
      </header>
      <main class="bg-violet-50">
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
           <div v-if="loading"  class="flex justify-center">
              <svg  class="animate-spin text-center  h-8 w-8 text-violet-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>             
            <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-gray-900">
                <!-- total image count -->
                <div class="order-1 lg:order-1 bg-white shadow-md p-3 text-center flex flex-col animate-fade-in-down" style="animation-delay: 0.2s">
                  <h2 class="text-2xl mb-3 text-center font-semibold">Total Images</h2>
                  <div
                    class="text-8xl pb-4 font-semibold text-violet-600 flex-1 flex items-center justify-center"
                  >
                    {{ imageCount }}
                  </div>
                </div>
                <!-- /total task count  -->

                <!-- analysis count -->
                <div class="order-2 lg:order-2 bg-white shadow-md p-3 text-center flex flex-col animate-fade-in-down" style="animation-delay: 0.2s">
                  <h2 class="text-2xl mb-3 text-center font-semibold">Analysis Performed</h2>
                  <div
                    class="text-8xl pb-4 font-semibold text-violet-600 flex-1 flex items-center justify-center"
                  >
                   {{ imageCount }}
                  </div>
                </div>
                <!-- /analysis count  -->

                 <!-- token available -->
                 <div class="order-3 lg:order-3 bg-white shadow-md p-3 text-center flex flex-col animate-fade-in-down" style="animation-delay: 0.2s">
                  <h2 class="text-2xl mb-3 text-center font-semibold">Token Available</h2>
                  <div
                    class="text-8xl pb-4 font-semibold text-violet-600 flex-1 flex items-center justify-center"
                  >
                  0
                  </div>
                </div>
                <!-- /token available  -->

                  <!-- token -->
                  <div class="order-4 lg:order-4 bg-white shadow-md p-3 text-center flex flex-col animate-fade-in-down" style="animation-delay: 0.2s">
                    <h2 class="text-2xl mb-3 text-center font-semibold">Token Used</h2>
                    <div
                      class="text-8xl pb-4 font-semibold text-violet-600 flex-1 flex items-center justify-center"
                    >
                   0
                    </div>
                  </div>
                  <!-- //  -->                  

                  <!-- latest image -->               
                  <div class="order-5 lg:order-5 row-span-2 bg-white shadow-md p-3 text-center flex flex-col animate-fade-in-down" style="animation-delay: 0.2s">
                    <h2 class="text-2xl mb-3 text-center font-semibold">Your Latest Image</h2>
                    <div v-if="latestImage">                                        
                      <div class="flex justify-between text-sm mb-1">
                        <div class="font-semibold">Created Date:</div>
                        <div class="font-semibold">{{ formatDate(latestImage.uploadDate)}}</div>
                      </div>
      
                      <div class="flex justify-between text-sm mb-1">
                        <div class="font-semibold">Status:</div>
                        <div>                       
                          <p class="text-green-700 font-semibold">Analysed</p>
                        </div>
                       <!--  <div v-else>                   
                          <p class="text-red-700 font-semibold">Pending</p>
                        </div> -->
                      </div>
                  
                      <div class="flex justify-center text-sm mb-1">
                        <img :src="latestImage.imageUrl" loading="lazy" alt="Latest Image"/>
                      </div>
                                         
                    </div>
                    <div v-else class="text-violet-600 text-center py-10 font-semibold">
                      Upload New Image
                       <button class="mt-3 px-3 py-2 bg-violet-800 rounded-md text-sm text-white hover:bg-violet-700">     New Image
                      </button>
                    </div>
                  </div>
                  <!-- /latest image -->

                 
            </div>
          </div> 
        
      </main>
</template>


<script>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
 import { PencilIcon, PlusIcon } from '@heroicons/vue/24/outline';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline';
import { useStore } from "vuex";
import { computed } from "vue";
import axios from 'axios';
import moment from 'moment';
import { useRouter } from "vue-router";


const details = {
  // name: 'Tom Cook',
  // email: 'tom@example.com',
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
    Bars3Icon,
  },

   data() {
    return {
      username: '', 
      imageCount: 0,
      latestImage: null,
      loading: true,
    };
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (vm.currentUser) {
        vm.username = vm.currentUser.user.username;         
      }
    });
  },

  methods: {
    fetchLatestImage() {     
    this.loading = true; 
      const user_id = this.currentUser.user._id; 
      axios.get(`https://fluximage-api.onrender.com/api/image/dashboard/latest/${user_id}`)
        .then((response) => {
          this.latestImage = response.data;
          this.loading = false; 
        })
        .catch((error) => {
          console.error('Error getting lates image:', error);
          this.loading = false; 
        });
    },

    fetchImageCount() {
      this.loading = true;
      const user_id = this.currentUser.user._id; 
      axios.get(`https://fluximage-api.onrender.com/api/image/image-count/${user_id}`)
        .then((response) => {
          this.imageCount = response.data.count;
          this.loading = false; 
        })
        .catch((error) => {
          console.error('Error getting image count:', error);
          this.loading = false; 
        });
    },

    formatDate(date) {
      return moment(date).fromNow();
    },

  },

  created() {
     this.fetchLatestImage();
     this.fetchImageCount();
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
    },
  },
};
</script>
