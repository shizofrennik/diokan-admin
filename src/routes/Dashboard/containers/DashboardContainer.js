import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class DashboardContainer extends React.Component {
    render() {
        return (
            <div>
                DashboardContainer
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
  return ({
  })
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)