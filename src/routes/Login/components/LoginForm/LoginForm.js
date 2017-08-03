import React from 'react';
import PropTypes from 'prop-types';
import AuthService from 'utils/AuthService';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as common from 'common';
import {browserHistory} from 'react-router';

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            submitted: false,
            email: '',
            password: ''
        };
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    static propTypes = {
        auth: PropTypes.instanceOf(AuthService)
    }

    handleChangeInput(e){
        var value = e.target.value;
        var name = e.target.name;
        this.setState({[name]: value});
    }

    handleKeyPress(e){
        if (e.charCode == 13 && this.state.terms) {
            this.handleSubmit();
        }
    }

    handleSubmit(){
        var isValidEmail = common.validateEmail(this.state.email);
        var isValidPass = common.validatePass(this.state.password);
        if(isValidEmail && isValidPass) {
            this.props.auth._doAuthentication(this.state.email, this.state.password).then(() => {
                browserHistory.push('/');
            });
        }
    }

    render() {
        return (
            <div className="diokan-form diokan-form-login">
                <div className="diokan-form__header">
                    <h4 className="diokan-title-primary">
                        Log In
                    </h4>
                </div>
                <div className="diokan-form-group-box">
                    <div className="diokan-form-group">
                        <input
                            type="email"
                            name="email"
                            className="diokan-form-control" 
                            placeholder="Email Address"
                            value={this.state.email} 
                            onChange={this.handleChangeInput}
                        />
                    </div>
                    <div className="diokan-form-group">
                        <input
                            type="password"
                            name="password"
                            className="diokan-form-control" 
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChangeInput}
                        />
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
                <button className="diokan-btn diokan-btn-form-action" onClick={this.handleSubmit}>Log In</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)