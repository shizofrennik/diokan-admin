import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {logo} from 'styles/svg/svgs.js';

class Header extends React.Component {
    render() {
        return (
            <header className="diokan-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 diokan-header-inner">
                            <div className="diokan-header__logo">
                                <div className="diokan-header__logo-image" dangerouslySetInnerHTML={{__html: logo.largeLogo}}/>
                            </div>
                            <div className="diokan-header__action-group">
                                <div className="diokan-header__action-group-inner">
                                    <button className="diokan-btn diokan-btn-login-link">
                                        Log In
                                    </button>
                                </div>
                                <button className="diokan-btn diokan-btn-primary">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)