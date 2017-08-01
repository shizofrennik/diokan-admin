import { injectReducer } from '../../store/reducers'
import DashboardContainer from './containers/DashboardContainer'

export default (store) => ({
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, DashboardContainer)
    }, 'dashboard')
  }
});