import CoreLayout from '../layouts/CoreLayout';
import AuthService from 'utils/AuthService';
import Dashboard from './Dashboard';
import Settings from './Settings';
import Portfolio from './Portfolio';
import LoginRoute from './Login';
import ForgotPasswordRoute from './ForgotPassword';
import SignUpRoute from './Signup';
import DashboardLayout from '../layouts/DashboardLayout';
import BaseLayout from '../layouts/BaseLayout';

export const auth = new AuthService('diWSD6yI7yUkv6lzDaf4l8j0WE34B30S', 'dmkryhtin.auth0.com');

export const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({pathname: '/login'})
  }
}

export const isLoggedIn = (nextState, replace) => {
  if (auth.loggedIn()) {
    replace({pathname: '/'})
  }
}

export const createRoutes = (store) => (
  {
    component   : CoreLayout,
    auth: auth,
    childRoutes : [
      {
        path        : '/',
        auth: auth,
        component   : DashboardLayout,
        indexRoute  : Dashboard(store),
        childRoutes : [
            Settings(store),
            Portfolio(store)
        ]
      },
      {
        component   : BaseLayout,
        auth: auth,
        childRoutes : [
          LoginRoute(store),
          SignUpRoute(store),
          ForgotPasswordRoute(store)
        ]
      }
    ]
  }
)

export default createRoutes
