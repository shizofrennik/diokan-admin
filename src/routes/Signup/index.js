import { injectReducer } from '../../store/reducers'
import SignUpContainer from './containers/SignUpContainer'

export default (store) => ({
  path: 'signup',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, SignUpContainer)
    }, 'signup')
  }
});