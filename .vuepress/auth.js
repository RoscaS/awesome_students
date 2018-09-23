
import auth0 from 'auth0-js'
import siteSettings from './siteSettings'
import Vue from 'vue'

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)


let webAuth = new auth0.WebAuth({
  domain: 'jrosk.eu.auth0.com',
  clientID: 'iYpiLCeqkqX5eOEJ2l7veh9KwCsuEOb0',
  redirectUri: 'http://localhost:8080/callback',
  // redirectUri: 'https://www.intra.jrosk.ch/callback',
  responseType: 'token id_token',
  scope: 'openid profile',
})

let auth = new Vue({
  data: () => ({
    tokenIsSet: false,
  }),
  computed: {
    token: {
      get () {
        return this.$cookies.get('id_token')
      },
      set (id_token) {
        this.$cookies.set('id_token', id_token)
      },
    },
    accessToken: {
      get () {
        return this.$cookies.get('access_token')
      },
      set (accessToken) {
        this.$cookies.set('access_token', accessToken)
      },
    },
    expiresAt: {
      get () {
        return this.$cookies.get('expires_at')
      },
      set (expiresIn) {
        let expiresAt = JSON.stringify(expiresIn * 1000 + new Date().getTime())
        this.$cookies.set('expires_at', expiresAt)
      },
    },
    user: {
      get () {
        return this.$cookies.get('user')
      },
      set (user) {
        this.$cookies.set('user', JSON.stringify(user))
      },
    },
    scope: {
      get () {
        return JSON.parse(this.$cookies.get('scope'))
      },
      set (scope) {
        this.$cookies.set('scope', JSON.stringify(scope))
      },
    },
  },
  methods: {
    setToken () {
      if (this.accessToken && !this.tokenIsSet) {
        this.tokenIsSet = true
      }
    },
    login () {
      webAuth.authorize()
    },
    logout () {
      return new Promise((resolve, reject) => {
        this.$cookies.remove('access_token')
        this.$cookies.remove('id_token')
        this.$cookies.remove('expires_at')
        this.$cookies.remove('user')
        this.tokenIsSet = false
        webAuth.logout()
      })
    },
    isAuthenticated () {
      return new Date().getTime() < this.expiresAt
    },
    handleAuthentication () {
      return new Promise((resolve, reject) => {
        webAuth.parseHash((err, authResult) => {
          if (authResult && authResult.accessToken && authResult.idToken) {
            let name = authResult.idTokenPayload.name;
            if (!siteSettings.authorised_users.includes(name)) {
              this.logout()
            } else {
              this.expiresAt = authResult.expiresIn
              this.accessToken = authResult.accessToken
              this.token = authResult.idToken
              this.user = authResult.idTokenPayload

              this.setToken()
              resolve()
            }
          } else if (err) {
            console.log('err')
            this.logout()
            reject(err)
          }
        })
      })
    },
  },
})


export default auth
// export default {
//   install: function (Vue) {
//     Vue.prototype.$auth = auth
//   },
// }
