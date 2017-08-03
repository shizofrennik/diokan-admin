import {injectReducer} from '../../store/reducers';
import PortfolioContainer from './containers/PortfolioContainer';

export default (store) => ({
  path: 'portfolio',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, PortfolioContainer)
    }, 'portfolio')
  }
});