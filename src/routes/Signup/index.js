import { injectReducer } from '../../store/reducers';
import SignUpContainer from './containers/SignUpContainer';
import { isLoggedIn } from '../../routes/index';

export default (store) => ({
  path: 'signup',
  onEnter: isLoggedIn,
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, SignUpContainer)
    }, 'signup')
  }
});