import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class LoginContainer extends React.Component {
  render() {
    return (
      <section className="diokan-entry-page">
        <form className="diokan-form diokan-form-login">
          <div className="diokan-form__header">
            <h4 className="diokan-title-primary">
              Log In
            </h4>
          </div>
          <div className="diokan-form-group-box">
            <div className="diokan-form-group">
              <input className="diokan-form-control" placeholder="Email Address"/>
            </div>
            <div className="diokan-form-group">
              <input className="diokan-form-control" placeholder="Password"/>
            </div>
            <div className="diokan-form-help-group diokan-form-help-group__inline">
              <label className="diokan-custom-input" for="checkbox-1">
                <input type="checkbox" id="checkbox-1" className="diokan-input"/>
                <span className="diokan-custom-input__checkbox"></span>
                <span className="diokan-form-label">Remember me</span>
              </label>
              <a href="" className="diokan-link diokan-link__small">Forgot password?</a>
            </div>
          </div>
          <button className="diokan-btn diokan-btn-form-action">Log In</button>
          <div className="diokan-form__delimiter">
                        <span className="diokan-form__delimiter-text">
                            or
                        </span>
          </div>
          <div className="diokan-form-social-entry">
            <div className="diokan-form-group">
              <div className="diokan-form-control-wrap diokan-icon diokan-icon__facebook">
                <input className="diokan-form-control" placeholder="Log in with Facebook"/>
              </div>
            </div>
            <div className="diokan-form-group">
              <div className="diokan-form-control-wrap diokan-icon diokan-icon__twitter">
                <input className="diokan-form-control" placeholder="Log in with Twitter"/>
              </div>
            </div>
            <div className="diokan-form-group">
              <div className="diokan-form-control-wrap diokan-icon diokan-icon__google">
                <input className="diokan-form-control" placeholder="Log in with Google"/>
              </div>
            </div>
          </div>
        </form>
      </section>
    )
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
