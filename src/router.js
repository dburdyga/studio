import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Services from './views/Services.vue';
import Project from './views/Projects.vue';
import Blog from './views/Blog.vue';
import Estimate from './views/Estimate.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
    },
    {
      path: '/project',
      name: 'project',
      component: Project,
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
    },
    {
      path: '/estimate',
      name: 'estimate',
      component: Estimate,
    },
  ],
});
