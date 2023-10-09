import { createRouter, createWebHistory } from 'vue-router'
import Index from '../view/Index.vue'
import Authenticate from '../view/user/Authenticate.vue'
import Register from '../view/user/Register.vue'
import Dashboard from '../view/user/Dashboard.vue'
import store from '../store';
// import ImageUploader from '../view/ImageUploader.vue'
// import Dashboard from '../view/Dashboard.vue';

const routes = [
		{
			path: '/',
			name: 'Index',
			component: Index
		},
		{
			path: '/Authenticate',
			name: 'Authenticate',
			component: Authenticate
		},	
		{
			path: '/Register',
			name: 'Register',
			component: Register,			
		},	
		{
		    path: '/Dashboard',
		    name: 'Dashboard',
		    component: Dashboard,		    
		},
	]

	


const router = createRouter({
	history: createWebHistory(),
	routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {    
    const isAuthenticated = store.getters.isAuthenticated; 
    if (!isAuthenticated) {      
      next('/Login');
    } else {
      next(); 
    }
  } else {
    next(); 
  }
});

export default router