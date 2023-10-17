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
            <h1 class="text-3xl font-bold tracking-tight text-gray-900">Images</h1>
            <div>
              <span class="font-semibold">Total Images: {{ imageCount }}</span>
            </div>          
          </div>
        </div>
    </header>
      <main class="bg-gray-50">
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">   
              <div v-if="loading"  class="flex justify-center">
                      <svg  class="animate-spin text-center  h-8 w-8 text-violet-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
              </div>       
              <div v-else>

                <div v-if="images.length === 0" class="bg-white flex justify-center items-center shadow-sm    animate-fade-in-down h-20">
                    <p class="font-semibold">You do not have any images</p>
                    <router-link :to="{name: 'ImageUpload'}" class="ml-4 py-2 px-4 border border-transparent text-sm rounded-md text-white bg-violet-800 hover:bg-violet-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Upload Image</router-link>
                </div>

                <div v-else class="grid grid-cols-1 gap-5 rounded sm:grid-cols-2 md:grid-cols-3">
                    <div v-for="image in images" :key="image._id" class="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 h[470px] opacity-0 animate-fade-in-down">
                      <img :src="image.imageUrl" alt="img" class="w-full h-48 object-cover"/>
                      <input type="hidden" v-model="user_id">
                      <div class="flex justify-between items-center mt-3">                         
                        <router-link :to="{name: 'ImageUpload'}" class="flex py-2 px-4 border border-transparent text-sm rounded-md text-white bg-violet-800 hover:bg-violet-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">                         
                          Analyze
                        </router-link>
                        <div class="flex items-center">
                           <span class="text-sm font-semibold">{{ formatDate(image.uploadDate)}}</span>
                          <button @click="deleteImage(image._id)"  type="button" class="h-8 w-8 flex items-center justify-center rounded-full border border-transparent text-sm text-red-500 focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 -mt-1 inline-block">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                            
                          </button>
                        </div>
                      </div>
                    </div>                
                </div>

	                <div  v-if="images.length !== 0" class="flex justify-center mt-5"> 
		                  <nav
		                  class="relative z-0 inline-flex justify-center bg-slate-100 rounded-md shadow-md -space-x-px"
		                  aria-label="Pagination">
		                    <button @click="previousPage" :disabled="currentPage === 1" 
                         :class="{
                          'cursor-not-allowed': currentPage === 1,
                         }"
                        class="relative inline-flex text-violet-700 hover:text-violet-600 rounded-md items-center px-4 py-2 border text-sm font-medium whitespace-nowrap">Previous</button> 
                         <button @click="nextPage" :disabled="images.length < pageSize"
                         :class="{
                          'cursor-not-allowed': images.length < pageSize,
                         }"
                          class="relative inline-flex text-violet-700 hover:text-violet-600 items-center px-4 py-2 border text-sm font-medium whitespace-nowrap">Next</button> 
		                 </nav> 
	               </div> 
              </div>
          </div> 
        
      </main>
</template>


<script>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
 import { PencilIcon, PlusIcon } from '@heroicons/vue/24/outline';
import { Bars3Icon, BellIcon, XMarkIcon, LinkIcon } from '@heroicons/vue/24/outline';
import { useStore } from "vuex";
import axios from 'axios';
import moment from 'moment';
import { computed } from "vue";
import { useRouter } from "vue-router";


const details = {
  imageUrl:
    '/user.svg',
}
const navigation = [
  { name: 'Dashboard', to: { name: 'Dashboard' } },
  { name: 'Recognition', to: { name: 'Recognition' } },
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
  },

  data() {
    return {
       images: [],
       imageCount: 0,
       user_id: '',
       loading: true,
       page: 1,
       pageSize: 6,

    };
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (vm.currentUser) {
        vm.user_id = vm.currentUser.user._id;        
      }
    });
  },

  methods: {
    formatDate(date) {
      return moment(date).fromNow();
    },

    deleteImage(image_id) {
      if (confirm('Are you sure you want to delete this image?')) {
        axios.delete(`http://localhost:3000/api/image/delete/${image_id}`)
          .then(() => {
            this.images = this.images.filter(image => image._id !== image_id);
            this.$toast.success('Image deleted successfully');
          })
          .catch((error) => {
            console.error('Error deleting image:', error);
            this.$toast.error('Error deleting image');
          });
      }
    },

    previousPage() {
      if (this.page > 1) {
        this.page--;      
        this.fetchImages();  
      }
    },

    nextPage() {
      this.page++;  
      this.fetchImages();   
    },

    fetchImages() {
      this.loading = true;

      const user_id = this.currentUser.user._id; 
      axios.get(`http://localhost:3000/api/image/view/${user_id}`, {
        params: {
          page: this.page,
          pageSize: this.pageSize,
        },
      })
        .then((response) => {
          this.images = response.data;
          this.loading = false;
        })
        .catch((error) => {
          console.error('Error getting user images:', error);
          this.loading = false; 
        });
    },

    fetchImageCount() {
      const user_id = this.currentUser.user._id; 
      axios.get(`http://localhost:3000/api/image/image-count/${user_id}`)
        .then((response) => {
          this.imageCount = response.data.count;
        })
        .catch((error) => {
          console.error('Error getting image count:', error);
        });
    },

  },

  created() {
     this.fetchImages();
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
     currentPage() {
      return this.page;
    },
  },
};
</script>
