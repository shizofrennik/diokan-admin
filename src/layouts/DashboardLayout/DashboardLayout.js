import React from 'react';
import { IndexLink, Link } from 'react-router';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import HeaderDashboard from 'components/HeaderDashboard';
import SideMenu from 'components/SideMenu';

class DashboardLayout extends React.Component {
  render() {    
    return (
      <div className="container nopadding">
        <HeaderDashboard/>
        <SideMenu/>
        {this.props.children}
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