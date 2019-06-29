import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import ax from "./api.js";
export default new Vuex.Store({
  state: {
     /* agId: null,
      userId: null,
      user: {},
      agente: {}, */
      status: localStorage.getItem('log') || false,
      token: localStorage.getItem('token') || '',
      
  },
  getters: {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
  },
  mutations: {
      AUTH_REQUEST(){},
      AUTH_SUCCESS(){},
      AUTH_ERROR(){},
  },
  actions: {
      AUTH_REQUEST({commit, dispatch}, user){          
          
          return new Promise((resolve, reject) => { // The Promise used for router redirect in login
              commit(AUTH_REQUEST)
              ax.post("log/login/", user)
                .then(response => {
                  const token = response.data.token
                  const agente = response.data.agente.agente
                  delete response.data.agente.agente 
                  const user = response.data.agente
                  localStorage.setItem('token', token) // store the token in localstorage
                  localStorage.setItem('agente', agente) // store the agente in localstorage
                  localStorage.setItem('user', user) // store the user in localstorage
                  commit(AUTH_SUCCESS, token)
                  // you have your token, now log in your user :)
                  this.$noty.success(response.data.message)
                  dispatch(USER_REQUEST)
                  resolve(response)
                })
              .catch(err => {
                commit(AUTH_ERROR, err)
                localStorage.clear() // if the request fails, remove any possible user token if possible
                reject(err)
              })
            })
      },
      
      
  }
    
    
})
