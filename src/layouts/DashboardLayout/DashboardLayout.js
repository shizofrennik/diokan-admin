import React from 'react';
import { IndexLink, Link } from 'react-router';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import HeaderDashboard from 'components/HeaderDashboard';
import SideMenu from 'components/SideMenu';

class DashboardLayout extends React.Component {
  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth,
        loggedIn: this.props.route.auth.loggedIn()
      })
    }

    return (
      <div className="container nopadding">
        <HeaderDashboard/>
        <SideMenu/>
        {children}
      </div>
    )
  }
}

DashboardLayout.propTypes = {
  children: PropTypes.element.isRequired
}

DashboardLayout.contextTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardLayout)