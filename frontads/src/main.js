import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//css third party
import 'bootstrap/dist/css/bootstrap.min.css'
import 'lightgallery/dist/css/lightgallery.min.css'

import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import 'owl.carousel/dist/assets/owl.carousel.min.css'





//js third party
import 'jquery'
window.$ = require('jquery')
window.JQuery = require('jquery')
import 'popper.js/dist/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'lightgallery/dist/js/lightgallery.min.js'
import './assets/js/parallax.min.js'
import 'owl.carousel/dist/owl.carousel.min.js'



//css custom
import './assets/css/present.css'
import './assets/css/style.css'
import './assets/css/dash.css'
import './assets/css/profile.css'
//import './assets/css/files.css'
import './assets/css/galery.css'


import 'vuejs-noty/dist/vuejs-noty.css'


//js custom
//import "./assets/js/sandboxpagseguro.lightbox.js"
//Vue.use(pagseguro)




import VueNoty from 'vuejs-noty';

Vue.use(VueNoty, {
    timeout: 5000, 
    progressBar: true, 
    layout: 'topRight', 
    theme: 'relax',
});


import VeeValidate from 'vee-validate';
//import pt_BR from "vee-validate/dist/locale/pt_BR";
Vue.use(VeeValidate, {locale: 'pt'});





import VueTheMask from 'vue-the-mask';
Vue.use(VueTheMask);

//import VueAnalytics from 'vue-analytics';

//Vue.use(VueAnalytics, {
 // id: 'UA-144814598-1'
//});
 
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
NProgress.configure({ minimum: 0.5, easing: 'ease', speed: 5000, showSpinner: true, trickle: false, trickleRate: 0.02, trickleSpeed: 800 });
Vue.use(NProgress);


import VueTour from 'vue-tour'
require('vue-tour/dist/vue-tour.css')
Vue.use(VueTour)


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  
  render: h => h(App)
}).$mount('#app')
