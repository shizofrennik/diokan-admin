import CoreLayout from '../layouts/CoreLayout';
import AuthService from 'utils/AuthService';
import Dashboard from './Dashboard';
import LoginRoute from './Login';
import SignUpRoute from './Signup';
import DashboardLayout from '../layouts/DashboardLayout';
import BaseLayout from '../layouts/BaseLayout';

const auth = new AuthService('diWSD6yI7yUkv6lzDaf4l8j0WE34B30S', 'dmkryhtin.auth0.com');

export const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({pathname: '/'})
  }
}

export const createRoutes = (store) => (
  {
    component   : CoreLayout,
    childRoutes : [
      {
        path        : '/',
        component   : DashboardLayout,
        indexRoute  : Dashboard(store),
        childRoutes : [
        ]
      },
      {
        component   : BaseLayout,
        childRoutes : [
           LoginRoute(store),
           SignUpRoute(store)
        ]
      }
    ]
  }
)

export default createRoutes
