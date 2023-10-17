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
            <h1 class="text-3xl font-bold tracking-tight text-gray-900">Account Settings</h1>  
            <a href="#" class="font-medium text-indigo-600 rounded-md bg-violet-800 px-3 py-3 text-white">Back</a>         
          </div>
        </div>
    </header>

    <main class="bg-violet-100">
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 ">
          <!-- update setting -->
          <div class="bg-white shadow-md p-3 animate-fade-in-down">
            <div class="px-4 sm:px-0">
                <h3 class="text-base font-semibold leading-7 text-gray-900">User Information</h3>   
                <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Edit your personal details.</p>
            </div>
            <form @submit.prevent="updateUserProfile" class="mt-6 border-t border-gray-100">
              <dl class="divide-y divide-gray-100">
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                  <input type="hidden" v-model="id">
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      v-model="username"
                      autocomplete="username"
                      class="mt-1 focus:ring-violet-600 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Full Name"
                    />
                  </dd>
                </div>
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900">Email address</dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      v-model="email"
                      autocomplete="email"
                      class="mt-1 focus:ring-violet-600 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Email"
                    />
                  </dd>
                </div>                                             
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900">Action</dt>
                  <dd class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <ul role="list" class="divide-y divide-gray-100 rounded-md">
                     <li class="flex items-center justify-between py-4  text-sm leading-6">
                        <div class=" flex-shrink-0">
                          <button type="submit" class="font-medium text-indigo-600 rounded-md bg-violet-800 px-3 py-3 text-white">Save Changes</button>
                        </div>
                      </li>                             
                    </ul>
                  </dd>
                </div>
              </dl>
            </form>
          </div>

          <!-- update password -->
          <div class="bg-white shadow-md mt-4 p-3 animate-fade-in-down">
            <div class="px-4 sm:px-0">
                <h3 class="text-base font-semibold leading-7 text-gray-900">Update Password</h3>                   
            </div>
            <form class="mt-6 border-t border-gray-100" @submit.prevent="updatePassword">
              <dl class="divide-y divide-gray-100">
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900">Current password</dt>
                  <input type="hidden" v-model="id">
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      type="password"                      
                      id="currentPassword"
                      autocomplete="currentPassword"
                      v-model="currentPassword"
                      required=""
                      class="mt-1 focus:ring-violet-600 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Current Password"
                    />
                  </dd>
                </div>
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900">New Password</dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      type="password"          
                      id="newPassword"
                      autocomplete="newPassword"
                      v-model="newPassword"
                      required=""
                      class="mt-1 focus:ring-violet-600 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="New Password"
                    />
                  </dd>
                </div>                                             
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900">Action</dt>
                  <dd class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <ul role="list" class="divide-y divide-gray-100 rounded-md">
                      <li class="flex items-center justify-between py-4  text-sm leading-6">
                        <div class=" flex-shrink-0">
                          <button type="submit" class="font-medium text-indigo-600 rounded-md bg-violet-800 px-3 py-3 text-white">Save Changes</button>
                        </div>
                      </li>                             
                    </ul>
                  </dd>
                </div>
              </dl>
            </form>
          </div>

          <!-- delete account -->
          <div class="bg-white shadow-md mt-4 p-3 animate-fade-in-down">
            <div class="px-4 sm:px-0">
                <h3 class="text-base font-semibold leading-7 text-gray-900">Delete Account</h3>                   
            </div>
            <div class="mt-6 border-t border-gray-100" v-if="isAuthenticated">
              <dl class="divide-y divide-gray-100">                                                          
                <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900">
                      <div class="flex-shrink-0">
                          <a href="#" class="font-medium text-indigo-600 rounded-md bg-red-800 px-3 py-3 text-white">Delete</a>
                        </div>
                  </dt>                 
                </div>
              </dl>
            </div>
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
import { useRouter } from "vue-router";
import { PaperClipIcon } from '@heroicons/vue/20/solid'

const details = {
  // name: 'Tom Cook',
  // email: 'tom@example.com',
  imageUrl: '/user.svg',
};

const navigation = [
  { name: 'Dashboard', to: { name: 'Dashboard' } },
  { name: 'Recognition', to: { name: 'Recognition' } },
  { name: 'Upload Image', to: { name: 'ImageUpload' } },
];

const userNavigation = [
  { name: 'Your Profile', to: { name: 'UserProfile' } },
  { name: 'Settings', to: { name: 'UserSettings' } },
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
    PaperClipIcon
  },

  data() {
    return {
      username: '', 
      email: '', 
      id: '',

      currentPassword: '',
      newPassword: '',
    };
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (vm.currentUser) {
        vm.username = vm.currentUser.user.username; 
        vm.email = vm.currentUser.user.email; 
        vm.id = vm.currentUser.user._id; 
      }
    });
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

   methods: {
    updateUserProfile() {
      // Call the store action to update the user's profile
      this.$store
        .dispatch('updateUserProfile', {
          username: this.username,
          email: this.email,
        })
        .then((success) => {
          if (success) {
            this.$toast.success('Successful! Login with your new details....', {
              timeout: 5000,
            });
            // Automatically redirect to the dashboard
            this.$router.push('/login');
          } else {
            this.$toast.error('Update failed. Please try again.');
          }
        });
    },
    updatePassword() {
      // Call the store action to update the user's password
      this.$store
        .dispatch('updateUserPassword', {
          currentPassword: this.currentPassword,
          newPassword: this.newPassword,
        })
        .then((success) => {
          if (success) {
           this.$toast.success('Successful! Login with your new details....', {
              timeout: 5000,
            });
            // Clear the password fields
            this.currentPassword = '';
            this.newPassword = '';
             // Automatically redirect to the dashboard
            this.$router.push('/login');
          } else {
            this.$toast.error('Failed to update password. Please try again.');
          }
        });
    },
    deleteUserAccount() {
      // Call the store action to delete the user's account
      this.$store.dispatch('deleteUserAccount');
    },
  },
};

</script>

