import Vue from 'vue';
import Router from 'vue-router';
import Contacts from './views/Contacts';
import Contact from './views/Contact';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Contacts
    },
    {
      path: '/:id',
      name: 'contact',
      component: Contact,
      params: true
    }
  ]
});