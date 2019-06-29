import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//css third party
import 'bootstrap/dist/css/bootstrap.min.css'
import 'lightgallery/dist/css/lightgallery.min.css'



//js third party
import 'jquery'
window.$ = require('jquery')
window.JQuery = require('jquery')
import 'popper.js/dist/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'lightgallery/dist/js/lightgallery.min.js'


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




import VueNoty from 'vuejs-noty'

Vue.use(VueNoty, {
    timeout: 5000, 
    progressBar: true, 
    layout: 'topRight', 
    theme: 'relax',
})

import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)




import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)


 



Vue.config.productionTip = false

new Vue({
  router,
  store,
  
  render: h => h(App)
}).$mount('#app')

