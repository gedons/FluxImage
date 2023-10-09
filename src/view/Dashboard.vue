<template>
  <div>
    <h1>User Dashboard</h1>

    <!-- Display user data -->
    <div v-if="user">
      <p>Welcome, {{ user.displayName }}</p>
      <!-- Add more user data fields here as needed -->
    </div>

    <!-- Sign Out button -->
    <button @click="signOut(onLogout)">Sign Out</button>
    <!-- Add other dashboard content here -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null, // Initialize user data to null
    };
  },
  methods: {
    // Method to fetch user data from the server
    async fetchUserData() {
      try {
        const response = await fetch('http://localhost:3000/api/user'); 
        const userData = await response.json();
        console.log('User Data:', userData); 
        this.user = userData;
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },
    signOut(callback) {
      // Redirect to the server route for Google Sign-Out (if implemented)
       window.location.href = 'http://localhost:3000/auth/logout';

       callback();

    },
  },
  mounted() {
    // Fetch user data when the component is mounted
    this.fetchUserData();
  },
};
</script>
