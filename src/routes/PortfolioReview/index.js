import {injectReducer} from '../../store/reducers';
import PortfolioReviewContainer from './containers/PortfolioReviewContainer';

export default (store) => ({
  path: 'portfolio-review',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, PortfolioReviewContainer)
    }, 'portfolio-review')
  }
});