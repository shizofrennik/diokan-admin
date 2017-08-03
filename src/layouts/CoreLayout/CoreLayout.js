import React from 'react';
import { IndexLink, Link } from 'react-router';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class CoreLayout extends React.Component {
  componentWillMount(){
    var refreshToken = sessionStorage.getItem('authRefreshTokenDiokan');
    if(refreshToken){
      this.props.route.auth.renew();
    }
  }

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth,
        loggedIn: this.props.route.auth.loggedIn()
      })
    }
    
    return (
      <div>
        {children}
      </div>
    )
  }
}

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired
}

CoreLayout.contextTypes = {
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


export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout)
