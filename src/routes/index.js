import CoreLayout from '../layouts/CoreLayout';
import Dashboard from './Dashboard';
import LoginRoute from './Login';
import DashboardLayout from '../layouts/DashboardLayout';
import BaseLayout from '../layouts/BaseLayout';

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
           LoginRoute(store)
        ]
      }
    ]
  }
)

export default createRoutes
