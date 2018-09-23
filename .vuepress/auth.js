
import auth0 from 'auth0-js'
import siteSettings from './siteSettings'
import Vue from 'vue'

let webAuth = new auth0.WebAuth({
  domain: 'jrosk.eu.auth0.com',
  clientID: 'iYpiLCeqkqX5eOEJ2l7veh9KwCsuEOb0',
  redirectUri: 'http://localhost:8080/callback',
  // audience: settings.audience,
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
        return localStorage.getItem('id_token')
      },
      set (id_token) {
        localStorage.setItem('id_token', id_token)
      },
    },
    accessToken: {
      get () {
        return localStorage.getItem('access_token')
      },
      set (accessToken) {
        localStorage.setItem('access_token', accessToken)
      },
    },
    expiresAt: {
      get () {
        return localStorage.getItem('expires_at')
      },
      set (expiresIn) {
        let expiresAt = JSON.stringify(expiresIn * 1000 + new Date().getTime())
        localStorage.setItem('expires_at', expiresAt)
      },
    },
    user: {
      get () {
        return JSON.parse(localStorage.getItem('user'))
      },
      set (user) {
        localStorage.setItem('user', JSON.stringify(user))
      },
    },
    scope: {
      get () {
        return JSON.parse(localStorage.getItem('scope'))
      },
      set (scope) {
        localStorage.setItem('scope', JSON.stringify(scope))
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
        localStorage.removeItem('access_token')
        localStorage.removeItem('id_token')
        localStorage.removeItem('expires_at')
        localStorage.removeItem('user')
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
