<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { register, Hanko  } from "@teamhanko/hanko-elements";

const hankoApi = 'https://2a239619-abda-450f-8b85-12553d612e5c.hanko.io'

const router = useRouter();
const hanko = new Hanko(hankoApi);

const logout = () => {
  hanko.user.logout().catch((error) => {
    console.log(error)
  })
}

const redirectAfterLogout = () => {
  router.push({ name: "Index" });
}

onMounted(() => {
  register(hankoApi)
    .catch((error) => {
      console.log(error)
    });
});
</script>

<template>
  <button @click="logout">Logout</button>
  <hanko-profile @onUserLoggedOut="redirectAfterLogout" />
</template>

