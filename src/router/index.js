import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contacts from '../views/contacts.vue'
import ContactDetails from '../views/contact-details.vue'
import Statistics from '../views/statistics.vue'
import ContactEdit from '../views/contact-edit.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/statistics',
      name: 'statistic',
      component: Statistics
    },
    {
      path: '/contact/:id',
      name: 'contact',
      component: ContactDetails
    },
    {
      path: '/contact',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/contact/edit/:id',
      name: 'contact edit',
      component: ContactEdit
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
