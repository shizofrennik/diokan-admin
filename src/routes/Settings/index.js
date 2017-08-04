import {injectReducer} from '../../store/reducers'
import SettingsContainer from './containers/SettingsContainer'

export default (store) => ({
  path: 'settings',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, SettingsContainer)
    }, 'settings')
  }
});