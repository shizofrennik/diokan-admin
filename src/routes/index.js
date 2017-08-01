import CoreLayout from '../layouts/CoreLayout';
import Dashboard from './Dashboard';
import LoginRoute from './Login';
import DashboardLayout from '../layouts/DashboardLayout';
import BaseLayout from '../layouts/BaseLayout';

export const createRoutes = (store) => (
  {
    path        : '/',
    component   : BaseLayout,
    indexRoute  : Dashboard(store),
    childRoutes : [
      {
        path        : '/',
        component   : DashboardLayout,
        indexRoute  : Dashboard(store),
        childRoutes : [
        ]
      },
      {
        path        : '/',
        component   : BaseLayout,
        indexRoute  : Dashboard(store),
        childRoutes : [
           LoginRoute(store)
        ]
      }
    ]
  }
)

export default createRoutes
