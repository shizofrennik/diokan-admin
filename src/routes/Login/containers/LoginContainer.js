import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class LoginContainer extends React.Component {
    render() {
        return (
            <div>
                Login
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
