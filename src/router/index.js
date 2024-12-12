import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
  },
  {
    path: '/press',
    name: 'press',
    component: () => import(/* webpackChunkName: "about" */ '../views/PressView.vue')
  },

  {
    path: '/requestView',
    name: 'requestView',
    component: () => import(/* webpackChunkName: "dashBoardAdminLogin" */ '../views/Request/RequestView.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/requestForm',
    name: 'requestForm',
    component: () => import(/* webpackChunkName: "dashBoardAdminLogin" */ '../views/Request/RequestForm.vue'),
    meta: { hideNavigation: true }
  },

  {
    path: '/admin',
    name: 'dashBoardAdminLogin',
    component: () => import(/* webpackChunkName: "dashBoardAdminLogin" */ '../views/Admin/DashBoardAdminLogin.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/dashBoard-side-bar-admin',
    name: 'dashBoardSideBarAdmin',
    component: () => import(/* webpackChunkName: "dashBoardSideBarAdmin" */ '../views/Admin/DashBoardSideBarAdmin.vue'),
    meta: { hideNavigation: true },
    redirect: { name: 'listOfUsers' },
    children: [
      {
        path: "/list-of-users",
        name: "listOfUsers",
        component: () =>
            import(/* webpackChunkName: "listOfUsers" */ "../views/Admin/ListOfUsers.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/list-of-messages",
        name: "listOfMessages",
        component: () =>
            import(/* webpackChunkName: "listOfMessages" */ "../views/Admin/ListOfMessages.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/requestAdminView",
        name: "RequestAdminView",
        component: () =>
            import(/* webpackChunkName: "listOfMessages" */ "../views/Admin/RequestAdminView.vue"),
        meta: { hideNavigation: true }
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
