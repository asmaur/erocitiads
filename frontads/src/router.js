import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//import store from './store'

Vue.use(Router)

var isAuthenticated = function(){
    var status  = localStorage.getItem("log") || false;
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
        path: '/pay/:slug/:id/:pk/',
        name: 'pagamento',
        component: () => import(/* webpackChunkName: "profile" */ './views/Pay.vue'),
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
        component: () => import(/* webpackChunkName: "profile" */ './views/Image.vue'),
        beforeEnter(to, from, next) {
            if (isAuthenticated()) {
                next();
            } else {
                next('/');
            }
        }
    },
  ]
});



export default router;