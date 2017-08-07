import {injectReducer} from '../../store/reducers';
import ProfileReviewContainer from './containers/ProfileReviewContainer';

export default (store) => ({
  path: 'profile-review',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, ProfileReviewContainer)
    }, 'profile-review')
  }
});