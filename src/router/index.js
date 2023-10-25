import { createRouter, createWebHistory } from 'vue-router'
import Index from '../view/Index.vue'
import Login from '../view/Login.vue'
import Register from '../view/Register.vue'
import Dashboard from '../view/user/Dashboard.vue'
import Welcome from '../view/user/Welcome.vue'
import UserProfile from '../view/user/UserProfile.vue'
import UserSettings from '../view/user/UserSettings.vue'
import Images from '../view/user/Images.vue'
import ImageUpload from '../view/image/ImageUpload.vue'
import AnalysisResults from '../view/image/AnalysisResults.vue';
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
			path: '*',
			redirect: "/"
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
		},	
		{
			path: '/register',
			name: 'Register',
			component: Register,			
		},	
		{
		    path: '/welcome',
		    name: 'Welcome',
		    component: Welcome,
		    meta: { requiresAuth: true },		    
		},	
		{
		    path: '/dashboard',
		    name: 'Dashboard',
		    component: Dashboard,
		    meta: { requiresAuth: true },		    
		},	
		{
		  path: '/dashboard/profile',
		  name: 'UserProfile',
		  component: UserProfile,
		  meta: { requiresAuth: true },
		},			
		{
		  path: '/dashboard/settings',
		  name: 'UserSettings',
		  component: UserSettings,
		  meta: { requiresAuth: true },
		},
		{
		  path: '/dashboard/images',
		  name: 'Images',
		  component: Images,
		  meta: { requiresAuth: true },
		},
		{
		  path: '/dashboard/ImageUpload',
		  name: 'ImageUpload',
		  component: ImageUpload,
		  meta: { requiresAuth: true },
		},
		{
		  path: '/analysisResult/:imageId',
		  name: 'AnalysisResults',
		  component: AnalysisResults,
		  meta: { requiresAuth: true },
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
      next({ name: 'Login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router