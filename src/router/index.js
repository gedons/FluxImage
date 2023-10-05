import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../view/Index.vue'
import ImageUploader from '../view/ImageUploader.vue'

const routes = [
		{
			path: '/',
			name: 'Index',
			component: Index
		},
		{
			path: '/Upload',
			name: 'ImageUploader',
			component: ImageUploader
		},	
	]


const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router