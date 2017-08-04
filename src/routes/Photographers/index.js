import {injectReducer} from '../../store/reducers'
import PhotographersContainer from './containers/PhotographersContainer'

export default (store) => ({
  path: 'photographers',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, PhotographersContainer)
    }, 'photographers')
  }
});