import React from 'react';
import { IndexLink, Link } from 'react-router';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from 'components/Header';

class BaseLayout extends React.Component {
  render() {    
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    )
  }
}

BaseLayout.propTypes = {
  children: PropTypes.element.isRequired
}

BaseLayout.contextTypes = {
  router: PropTypes.object
}

const mapStateToProps = (state, props) => {
  return ({
  })
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseLayout)