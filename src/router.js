import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/home/Home.vue';
import Services from './components/services/Services.vue';
import Project from './components/projects/Projects.vue';
import Blog from './components/blog/Blog.vue';
import Estimate from './components/estimate/Estimate.vue';

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
