import { createRouter, createWebHistory } from 'vue-router';
import PostForm from '../components/PostForm.vue';
import PostList from '../views/PostList.vue';
import DetailProductView from '../views/DetailProductView.vue';


const routes = [
  { path: '/detail/:id', name: 'DetailProductView', component: DetailProductView },
  { path: '/', component: PostList },
  { path: '/about', name: 'About', component: () => import('../components/About.vue') },
  { path: '/create', component: PostForm },
  { path: '/edit/:id', component: PostForm }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;