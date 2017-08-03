import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {IndexLink, Link} from 'react-router';
import {logo} from 'styles/svg/svgs.js';

class SideMenu extends React.Component {
    render() {
        return (
            <aside className="diokan-sidebar diokan-sidebar__fixed-right">
                <div className="diokan-sidebar__top">
                    <div className="diokan-sidebar__logo" dangerouslySetInnerHTML={{__html: logo.simpleLogo}}></div>
                    <ul className="diokan-side-menu">
                        <li className="diokan-side-menu__item">
                            <IndexLink 
                                activeClassName="diokan-side-menu__item-link-active" 
                                to="/" 
                                className="diokan-side-menu__item-link">
                                <span className="diokan-side-menu__item-icon">
                                    <i className="fa fa-tachometer" aria-hidden="true" />
                                </span>
                                Dashboard
                            </IndexLink>
                        </li>
                        <li className="diokan-side-menu__item">
                            <a href="" className="diokan-side-menu__item-link">
                        <span className="diokan-side-menu__item-icon">
                            <i className="fa fa-camera-retro" aria-hidden="true" />
                        </span>
                                Sessions
                            </a>
                        </li>
                        <li className="diokan-side-menu__item">
                            <a href="" className="diokan-side-menu__item-link">
                        <span className="diokan-side-menu__item-icon">
                            <i className="fa fa-bar-chart" aria-hidden="true" />
                        </span>
                                Earnings
                            </a>
                        </li>
                        <li className="diokan-side-menu__item">
                        <Link 
                            activeClassName="diokan-side-menu__item-link-active"
                            to="portfolio" 
                            className="diokan-side-menu__item-link">
                            <span className="diokan-side-menu__item-icon">
                                <i className="fa fa-briefcase" aria-hidden="true" />
                            </span>
                            Portfolio
                        </Link>
                        </li>
                    </ul>
                </div>
                <div className="diokan-sidebar__bottom">
                    <div className="diokan-sidebar-info">
                        <button className="diokan-btn diokan-messages-box" data-message-count="3">
                            <i className="fa fa-envelope" aria-hidden="true" />
                        </button>
                        <Link to="/settings" className="diokan-user-box">
                            <div className="diokan-user-box__logo">
                                <i className="fa fa-user-circle-o" aria-hidden="true" />
                            </div>
                            <div className="diokan-user-box__name">
                                Trisha
                            </div>
                        </Link>
                    </div>
                </div>
            </aside>
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

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)