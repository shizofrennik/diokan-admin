import { injectReducer } from '../../store/reducers'
import LoginContainer from './containers/LoginContainer'

export default (store) => ({
  path: 'login',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, LoginContainer)
    }, 'login')
  }
});