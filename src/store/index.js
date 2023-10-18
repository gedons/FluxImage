import { createStore } from "vuex";

const store = createStore({
  state: {
    isAuthenticated: false,
    user: null,  
    token: null,
    userProfile: null, 
  },
  mutations: {
    SET_AUTHENTICATED(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    SET_USER(state, user) {
      state.user = user;
    },   
    SET_TOKEN(state, token) {
      state.token = token; // Mutation to set the token
    },   
    SET_USER_PROFILE(state, userProfile) {
      state.userProfile = userProfile; // Mutation to set user profile
    },
  },
   actions: {
    async register({ commit }, { username, email, password }) {
      try {
        // Make an API request to your back end to register the user
        const response = await fetch('http://localhost:3000/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, password }),
        });

        if (response.ok) {
          // Registration was successful
          const userData = await response.json();

          // Update state
          commit('SET_AUTHENTICATED', true);
          commit('SET_USER', userData);

          return true;
        } else {
          // Registration failed
          return false;
        }
      } catch (error) {
        // Handle any errors
        console.error('Registration error:', error);
        return false;
      }
    },

    async login({ commit }, { email, password }) {
      try {
        // Make an API request to your back end to authenticate the user
        const response = await fetch('http://localhost:3000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          // Authentication was successful
          const userData = await response.json();

          // Update state
          commit('SET_AUTHENTICATED', true);
          commit('SET_USER', userData);
          commit('SET_TOKEN', userData.token);

          return true;
        } else {
          // Authentication failed
          return false;
        }
      } catch (error) {
        // Handle any errors
        console.error('Login error:', error);
        return false;
      }
    },

    async updateUserProfile({ commit }, { username, id }) {
      try {
        // Make an API request to update the user's profile
        const response = await fetch('http://localhost:3000/api/user/profile', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, id }),
        });

        if (response.ok) {
           // Profile update was successful
          const userData = await response.json();
            // Update state with the updated user data
          commit('SET_USER', userData);
                    

          return true;
        } else {
          // Profile update failed
          console.error('Profile update failed');
          // Handle the error as needed
        }
      } catch (error) {
        // Handle any errors
        console.error('Profile update error:', error);
      }
    },

    async fetchUserData({ commit }) {
      try {
        // Make an API request to fetch the user's data
        const response = await fetch('http://localhost:3000/api/user/profile', {
          method: 'GET',
          headers: {
             'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          // Fetch user data was successful
          const userData = await response.json();

          // Update the store with the fetched user data
          commit('SET_USER', userData);
        } else {
           console.error('Fetch error:', error);
        }
      } catch (error) {
        // Handle any errors
        console.error('Fetch user data error:', error);
      }
    },
     
   async updateUserPassword({ commit }, { currentPassword, newPassword }) {
      try {
        // Make an API request to update the user's password
        const response = await fetch('http://localhost:3000/api/user/updatePassword', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ currentPassword, newPassword }),
        });

        if (response.ok) {
          // Password update was successful
          return true;
        } else {
          // Password update failed
          return false;
        }
      } catch (error) {
        // Handle any errors
        console.error('Password update error:', error);
        return false;
      }
    },

    logout({ commit }) {
      // Clear authentication state
      commit('SET_AUTHENTICATED', false);
      commit('SET_USER', null);
    },
   
  },
  getters: {
     
    isAuthenticated: (state) => state.isAuthenticated,
    token: (state) => state.token, 
    currentUser: (state) => state.user,
    
  },
});
export default store;
