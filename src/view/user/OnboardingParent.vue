<template>
  <main class="bg-white">

    <div class="relative flex">

      <!-- Content -->
      <div class="w-full md:w-1/2">

        <div class="min-h-screen h-full flex flex-col after:flex-1">
            
            <!-- <hanko-profile  @onUserLoggedOut="redirectAfterLogout" /> -->

          <div class="flex-1">

            <!-- Header -->
            <div class="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
              <!-- Logo -->
              <router-link class="block" to="/">
                <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
                  <!-- Uploaded to: SVG Repo, www.svgrepo.com, Transformed by: SVG Repo Mixer Tools -->
                  <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                  <g id="SVGRepo_iconCarrier"> <defs> <path id="image-a" d="M4,4 C2.8954305,4 2,3.1045695 2,2 C2,0.8954305 2.8954305,0 4,0 C5.1045695,0 6,0.8954305 6,2 C6,3.1045695 5.1045695,4 4,4 Z M0.497558594,15 L4.07592773,10.7578125 L6.02026367,12.2731934 L13.4494629,2.51928711 L16,5.45703125 L16,15 L0.497558594,15 Z"/> <path id="image-c" d="M18,6.97348874 L18,2 L2,2 L2,15.5476712 L6.04883416,10.4166727 C6.41808601,9.94872797 7.11213264,9.90569713 7.53635945,10.3244463 L9.54496213,12.3071135 L14.8746293,5.31817463 C15.2514017,4.82410259 15.9827874,4.78961411 16.4043805,5.24603924 L18,6.97348874 Z M18,9.92107486 L15.7430352,7.47763974 L10.4462935,14.4234025 C10.0808144,14.9026653 9.37757149,14.9521101 8.9486259,14.5287032 L6.92665827,12.5328435 L2.61256422,18 L18,18 L18,9.92107486 Z M2,0 L18,0 C19.1045695,0 20,0.8954305 20,2 L20,18 C20,19.1045695 19.1045695,20 18,20 L2,20 C0.8954305,20 0,19.1045695 0,18 L0,2 C0,0.8954305 0.8954305,0 2,0 Z M7,9 C5.34314575,9 4,7.65685425 4,6 C4,4.34314575 5.34314575,3 7,3 C8.65685425,3 10,4.34314575 10,6 C10,7.65685425 8.65685425,9 7,9 Z M7,7 C7.55228475,7 8,6.55228475 8,6 C8,5.44771525 7.55228475,5 7,5 C6.44771525,5 6,5.44771525 6,6 C6,6.55228475 6.44771525,7 7,7 Z"/> </defs> <g fill="none" fill-rule="evenodd" transform="translate(2 2)"> <g transform="translate(3 4)"> <mask id="image-b" fill="#ffffff"> <use xlink:href="#image-a"/> </mask> <use fill="#D8D8D8" xlink:href="#image-a"/> <g fill="#FFA0A0" mask="url(#image-b)"> <rect width="24" height="24" transform="translate(-5 -6)"/> </g> </g> <mask id="image-d" fill="#ffffff"> <use xlink:href="#image-c"/> </mask> <use fill="#000000" fill-rule="nonzero" xlink:href="#image-c"/> <g fill="#7600FF" mask="url(#image-d)"> <rect width="24" height="24" transform="translate(-2 -2)"/> </g> </g> </g>
                  </svg>
              </router-link>
              <div class="text-sm">
                 <div class="font-medium text-violet-500 hover:text-violet-600" to="/signin">
                   <button @click="logout">Logout</button>
                 </div>
              </div>
            </div>

            <!-- Progress bar -->
            <div class="px-4 pt-12 pb-8">
              <div class="max-w-md mx-auto w-full">
                <div class="relative">
                  <div class="absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-slate-200" aria-hidden="true"></div>
                  <ul class="relative flex justify-between w-full">
                    <li>
                      <router-link class="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-violet-500 text-white" to="/Onboarding-01">1</router-link>
                    </li>
                    <li>
                      <router-link class="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 text-slate-500" to="/Onboarding-02">2</router-link>
                    </li>
                    <li>
                      <router-link class="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 text-slate-500" to="/Onboarding-03">3</router-link>
                    </li>
                    <li>
                      <router-link class="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 text-slate-500" to="/Onboarding-04">4</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="px-4 py-8">
            <component :is="currentStepComponent" @nextStep="nextStep" />
          </div>

        </div>

      </div>

      <!-- Image -->
      <div class="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2" aria-hidden="true">
        <img class="object-cover object-center w-full h-full" src="https://source.unsplash.com/random" width="760" height="1024" alt="Onboarding" />
        <!-- <img class="absolute top-1/4 left-0 -translate-x-1/2 ml-8 hidden lg:block" src="../images/auth-decoration.png" width="218" height="224" alt="Authentication decoration" /> -->
      </div>

    </div>

  </main>
</template>


<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { Hanko } from "@teamhanko/hanko-elements";
import OnboardingStep1 from '../../components/user/Onboarding01.vue';
import OnboardingStep2 from '../../components/user/Onboarding02.vue';
import OnboardingStep3 from '../../components/user/Onboarding03.vue';
import OnboardingStep4 from '../../components/user/Onboarding04.vue';

const hankoApi = 'https://2a239619-abda-450f-8b85-12553d612e5c.hanko.io';
const router = useRouter();
const hanko = new Hanko(hankoApi);

const currentStep = ref(1);

const handleNextStep = (nextStepNumber) => {
  // Move to the next step
  currentStep.value = nextStepNumber;
};

const logout = () => {
  hanko.user.logout().then(() => {
    router.push({ name: "Index" });
  }).catch((error) => {
    console.log(error);
  });
};

let currentStepComponent = ref(null);

// Determine which step component to display based on the currentStep value
switch (currentStep.value) {
  case 1:
    currentStepComponent = OnboardingStep1;
    break;
  case 2:
    currentStepComponent = OnboardingStep2;
    break;
  case 3:
    currentStepComponent = OnboardingStep3;
    break;
  case 4:
    currentStepComponent = OnboardingStep4;
    break;
  default:
    currentStepComponent = null;
}

onMounted(() => {
  // Your onMounted logic here
});
</script>
