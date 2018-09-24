
import auth0 from 'auth0-js'
import siteSettings from './siteSettings'
import Vue from 'vue'

let webAuth = new auth0.WebAuth({
  domain: 'jrosk.eu.auth0.com',
  clientID: 'iYpiLCeqkqX5eOEJ2l7veh9KwCsuEOb0',
  // redirectUri: 'http://localhost:8080/callback',
  redirectUri: 'https://www.intra.jrosk.ch/callback',
  responseType: 'token id_token',
  scope: 'openid profile',
})

let auth = new Vue({
  data: () => ({
    tokenIsSet: false,
    _id_token: '',
    _access_token: '',
    _expires_at: '',
    _user: '',
    _scope: ''


  }),
  computed: {
    token: {
      get () {
        return this._id_token
      },
      set (id_token) {
        this._id_token = id_token
      },
    },
    accessToken: {
      get () {
        return this._access_token
      },
      set (accessToken) {
        this._access_token = accessToken
      },
    },
    expiresAt: {
      get () {
        return this._expires_at
      },
      set (expiresIn) {
        this._expires_at = JSON.stringify(expiresIn * 1000 + new Date().getTime())
      },
    },
    user: {
      get () {
        return JSON.parse(this._user)
      },
      set (user) {
        this._user = JSON.stringify(user)
      },
    },
    scope: {
      get () {
        return JSON.parse(this._scope)
      },
      set (scope) {
        this._scope = JSON.stringify(scope)
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
        this.access_token = null
        this.id_token = null
        this.expires_at = null
        this.user = null
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
