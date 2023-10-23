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
            <h1 class="text-3xl font-bold tracking-tight text-gray-900">Upload Image</h1>
            <div>
              <router-link :to="{name: 'Images'}" class="flex py-2 px-4 border border-transparent text-sm rounded-md text-white bg-violet-800 hover:bg-violet-700 focus:ring-2 font-semibold focus:ring-offset-2 focus:ring-indigo-500">
                 Back
              </router-link>
            </div>          
          </div>
        </div>
      </header>
      <main class="bg-gray-50">
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">           
            <div class="bg-white flex justify-center items-center shadow-md p-3 animate-fade-in-down">
              
                <div @dragover.prevent @drop="handleDrop" class="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg" 
                  style="width: 450px">
                        <div v-if="imagePreview" class="flex justify-center items-center">
                            
                                <img :src="imagePreview" alt="Image Preview" style="max-width: 100%; height: 170px;">                                                                   
                        </div>
                          <svg v-else class="text-violet-500 w-24 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                          <div class="input_field flex flex-col w-max mx-auto text-center">
                              <label>

                                  <input type="hidden" v-model="user_id">
                                  <input type="file" class="text-sm cursor-pointer w-36 hidden" name="image" ref="fileInput" @change="previewImage" @click="checkFileSize" accept="image/*">

                                  <div v-if="imagePreview" :disabled="loading" class="flex justify-center items-center">
                                    <button  @click="uploadImage" class="text bg-violet-800 text-white border border-violet-300 rounded font-semibold cursor-pointer mt-3 p-1 px-7 hover:bg-violet-700 flex justify-center items-center"
                                        :class="{
                                           'cursor-not-allowed': loading,  

                                         }">  
                                        <svg v-if="loading" class="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor"
                                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                            </path>
                                       </svg>
                                      <span>Save</span>
                                      <span>Save</span>
                                    </button>
                                  </div>
                                  <div v-else class="text bg-violet-800 text-white border border-violet-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-violet-700">
                                    Select Image
                                  </div>

                              </label>
                              <div class=" mt-2 title text-violet-500 uppercase font-semibold">or drop image here</div><span>(max size: 2MB)</span>
                          </div>
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
import { computed } from "vue";
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
  },

   data() {
    return {
      imagePreview: '',
      user_id: '',
      loading: false,
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

    // Function to preview the selected image
    previewImage() {
      const fileInput = this.$refs.fileInput;
      const file = fileInput.files[0];
      this.imagePreview = URL.createObjectURL(file);      
    },  

    // Function to upload the image
    async uploadImage() {
      this.loading = true;
      if (!this.imagePreview) {
        this.$toast.error('Please select an image first');
        return;
      }

      try {
        const formData = new FormData();
        formData.append('image', this.$refs.fileInput.files[0]);       
        formData.append('user_id', this.user_id);

        // Make an API request to upload the image
        const response = await axios.post('http://localhost:3000/api/image/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data', 
          },
        });

        if (response.status === 200) {
          this.$toast.success('Analysis performed successfully');
          // Clear form fields 
          this.imagePreview = '';
          this.loading = false;
          this.$router.push('/dashboard/images');
        }
      } catch (error) {
        this.$toast.error('Image upload failed. Please try again.');
        this.loading = false;
        console.error('Image upload error:', error);

      }
    }, 

     // Function to handle dropping an image onto the drop area
    handleDrop(event) {
      event.preventDefault();

      const file = event.dataTransfer.files[0];

      if (file && file.type.startsWith('image/')) {
        this.imagePreview = URL.createObjectURL(file);
         
      }
    },

    //Function to check file size
    checkFileSize(event) {
      const fileInput = this.$refs.fileInput;
      const file = fileInput.files[0];
      const maxSize = 2 * 1024 * 1024; // 2MB (in bytes)

      if (file && file.size > maxSize) {
        event.preventDefault();
        this.$toast.error('File size exceeds the maximum limit (2MB).');
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
    },
  },
};
</script>
