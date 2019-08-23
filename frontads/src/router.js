import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import VueAnalytics from 'vue-analytics';

Vue.use(Router)

var isAuthenticated = function(){
    var status  = localStorage.getItem("log") || false;
    //status = true;
    return status;
}

let router =  new Router({
    //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
      {
      path: '/secoes',
      name: 'secoes',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Secoes.vue')
    },
      {
      path: '/politica-de-privacidade',
      name: 'privacidade',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Privacy.vue')
    },
      {
      path: '/termo-de-uso',
      name: 'termo',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Termo.vue')
    },
      {
      path: '/resetar-senha/:reset/',
      name: 'resetar',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Resetar.vue')
    },
      {
      path: '/esqueci-minha-senha',
      name: 'esqueci',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Esqueci.vue')
    },
    {
        path: '/dash/:id/',
        name: 'dash',
        component: () => import(/* webpackChunkName: "dash" */ './views/Dash.vue'),
        beforeEnter(to, from, next) {
            if (isAuthenticated()) {
                next();
            } else {
                next('/');
            }
        }
    },
    
    {
        path: '/users/account/:id/',
        name: 'account',
        component: () => import(/* webpackChunkName: "profile" */ './views/Conta.vue'),
        beforeEnter(to, from, next) {
            if (isAuthenticated()) {
                next();
            } else {
                next('/');
            }
        }
    },
      {
        path: '/users/coins/:id/',
        name: 'getbalance',
        component: () => import(/* webpackChunkName: "profile" */ './views/Coins.vue'),
        beforeEnter(to, from, next) {
            if (isAuthenticated()) {
                next();
            } else {
                next('/');
            }
        }
    },
    {
        path: '/users/e/account/:id/',
        name: 'edit account',
        component: () => import(/* webpackChunkName: "profile" */ './views/EditAccount.vue'),
        beforeEnter(to, from, next) {
            if (isAuthenticated()) {
                next();
            } else {
                next('/');
            }
        }
    },
    {
        path: '/profile/:slug/:id/',
        name: 'profile',
        component: () => import(/* webpackChunkName: "profile" */ './views/Profile.vue'),
        beforeEnter(to, from, next) {
            if (isAuthenticated()) {
                next();
            } else {
                next('/');
            }
        }
    },
    {
        path: '/preview/:slug/:id/',
        name: 'preview',
        component: () => import(/* webpackChunkName: "profile" */ './views/Preview.vue'),
        beforeEnter(to, from, next) {
            if (isAuthenticated()) {
                next();
            } else {
                next('/');
            }
        }
    },
    {
        path: '/e/p/:slug/:id/',
        name: 'editar perfil',
        component: () => import(/* webpackChunkName: "profile" */ './views/EditarPerfil.vue'),
        beforeEnter(to, from, next) {
            if (isAuthenticated()) {
                next();
            } else {
                next('/');
            }
        }
    },
    {
        path: '/e/d/:slug/:id/',
        name: 'editar dados',
        component: () => import(/* webpackChunkName: "profile" */ './views/Dados.vue'),
        beforeEnter(to, from, next) {
            if (isAuthenticated()) {
                next();
            } else {
                next('/');
            }
        }
    },
    {
        path: '/e/s/:slug/:id/',
        name: 'editar service',
        component: () => import(/* webpackChunkName: "profile" */ './views/Service.vue'),
        beforeEnter(to, from, next) {
            if (isAuthenticated()) {
                next();
            } else {
                next('/');
            }
        }
    },
    {
        path: '/e/es/:slug/:id/',
        name: 'editar especial',
        component: () => import(/* webpackChunkName: "profile" */ './views/Especial.vue'),
        beforeEnter(to, from, next) {
            if (isAuthenticated()) {
                next();
            } else {
                next('/');
            }
        }
    },
    {
        path: '/e/v/:slug/:id/',
        name: 'editar valores',
        component: () => import(/* webpackChunkName: "profile" */ './views/Valor.vue'),
        beforeEnter(to, from, next) {
            if (isAuthenticated()) {
                next();
            } else {
                next('/');
            }
        }
    },
    {
        path: '/e/l/:slug/:id/',
        name: 'editar local',
        component: () => import(/* webpackChunkName: "profile" */ './views/Locais.vue'),
        beforeEnter(to, from, next) {
            if (isAuthenticated()) {
                next();
            } else {
                next('/');
            }
        }
    },
      
    {
        path: '/e/i/:slug/:id/',
        name: 'editar imagens',
        component: () => import(/* webpackChunkName: "profile" */ './views/Fotos.vue'),
        beforeEnter(to, from, next) {
            if (isAuthenticated()) {
                next();
            } else {
                next('/');
            }
        }
    },
       {
            path: '*',
            name: 'not found',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ './views/Found404.vue'),

    },
  ]
});

router.beforeResolve((to, from, next) => {
  if (to.path) {
      
    NProgress.start()
  }
  next()
});

router.afterEach(() => {
  NProgress.done(true)
});

Vue.use(VueAnalytics, {
    // this one of course needs to me a real domain ID
    id: 'UA-144814598-1',
    //id: 'teste', 
   // use the `router` instance here
    router
});

export default router;