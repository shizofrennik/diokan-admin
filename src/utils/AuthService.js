import {EventEmitter} from 'events';
import {isTokenExpired} from './jwtHelper';
import auth0 from 'auth0-js';
import {browserHistory} from 'react-router';
import axios from 'axios';
import toastr from 'toastr';
import * as api from 'api';
export const auth0DatabaseConnection = "Username-Password-Authentication";
const auth0api = "https://dmkryhtin.auth0.com/api/v2/";
import * as common from 'common';

export function setAuthorizationHeader(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}

export default class AuthService extends EventEmitter {
  constructor(clientId, domain) {
    super();
    this.clientId = clientId;
    this.domain = domain;
    this._doAuthentication = this._doAuthentication.bind(this);
    this._doRegistration = this._doRegistration.bind(this);
    this.auth0 = new auth0.WebAuth({
      domain: domain,
      clientID: clientId,
      scope: "openid email profile offline_access",
      responseType: 'id_token token'
    });
  }

  _doRegistration(email, password) {
    return new Promise((resolve, reject) => {
      var authData = {
        client_id: this.clientId,
        email: email,
        password: password,
        username: email,
        connection: auth0DatabaseConnection,
        scope: "openid email profile offline_access",
      }

      api.fetchSignUp(this.domain, authData).then((resp) => {
        if(resp.status == 200) {
          this._doAuthentication(email, password).then(() => {
             resolve();
          });
        }
        if(resp.status == 400) {
           reject(resp.data)
        }
      }).catch((error) => {
        reject(error)
      })
    })
  }

  _doAuthentication(email, password, remember = false) {
    return new Promise((resolve, reject) => {
      var authData = {
        grant_type: "password",
        username: email,
        password: password,
        audience: "https://dmkryhtin.auth0.com/api/v2/",
        scope: "openid email profile offline_access",
        client_id: this.clientId
      }

      api.fetchSignIn(this.domain, authData).then((resp) => {
          setAuthorizationHeader(resp.id_token)
          this.setToken(resp.id_token)
          if(remember){
            this.setRefreshToken(resp.refresh_token);
          }
          this.auth0.client.userInfo(resp.access_token, (error, profile) => {
              if (!error) {
                this.setProfile(profile);
                resolve();
              }
          });
      }).catch((error) => {
        reject(error)
      });
    });
  }

  _doRefreshAuthentication(token) {
    return new Promise((resolve, reject) => {
      var authData = {
        grant_type: "refresh_token",
        refresh_token: token,
        audience: "https://dmkryhtin.auth0.com/api/v2/",
        scope: "openid email profile offline_access",
        client_id: this.clientId
      }

      api.fetchSignIn(this.domain, authData).then((resp) => {
        setAuthorizationHeader(resp.id_token);
        this.setToken(resp.id_token);
      }).catch((error) => {
        reject(error)
      });
    });
  }

  _doChangePassword(email, password) {
    return new Promise((resolve, reject) => {
      var authData = {
        email: email,
        password: password,
        client_id: this.clientId,
        connection: auth0DatabaseConnection
      }
      
      api.fetchChangePassword(this.domain, authData).then((resp) => {
        console.log(resp);
        resolve();
      }).catch((error) => {
        reject(error)
      });
    });
  }

  renew(){
    var token = this.getRefreshToken();
    var profile = this.getProfile();
    if(token) {
      this._doRefreshAuthentication(token);
    }
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !isTokenExpired(token);
  }

  logout() {
    browserHistory.replace('/');
    sessionStorage.removeItem('authTokenDiokan');
    sessionStorage.removeItem('profileDiokan');
    setAuthorizationHeader();
  }

  setProfile(profile) {
    sessionStorage.setItem('profileDiokan', JSON.stringify(profile));
    this.emit('profile_updated', profile);
  }

  setToken(idToken) {
    sessionStorage.setItem('authTokenDiokan', idToken);
  }

  setRefreshToken(refreshToken) {
    sessionStorage.setItem('authRefreshTokenDiokan', refreshToken);
  }

  getToken() {
    return sessionStorage.getItem('authTokenDiokan');
  }

  getRefreshToken() {
    return sessionStorage.getItem('authRefreshTokenDiokan');
  }

  getProfile() {
    var profile = sessionStorage.getItem('profileDiokan');
    return JSON.parse(profile);
  }
}