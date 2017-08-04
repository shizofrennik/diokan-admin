import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {IndexLink, Link} from 'react-router';
import {logo} from 'styles/svg/svgs.js';

class SideMenu extends React.Component {
    render() {
        return (
            <aside className="diokan-sidebar diokan-sidebar__fixed-right">
                <div className="diokan-sidebar-group">
                    <div className="diokan-sidebar__top">
                        <div className="diokan-sidebar__logo" dangerouslySetInnerHTML={{__html: logo.simpleLogo}}/>
                        <ul className="diokan-side-tabs">
                            <li className="diokan-side-tabs__item">
                                <a href="#dashboard" className="diokan-side-tabs__item-link" data-toggle="tab">
                                <span className="diokan-side-tabs__item-icon">
                                    <i className="fa fa-tachometer" aria-hidden="true"></i>
                                </span>
                                    Dashboard
                                </a>
                            </li>
                            <li className="diokan-side-tabs__item">
                                <a href="#photographers" className="diokan-side-tabs__item-link" data-toggle="tab">
                                <span className="diokan-side-tabs__item-icon">
                                    <i className="fa fa-camera-retro" aria-hidden="true"></i>
                                </span>
                                    Photographers
                                </a>
                            </li>
                            <li className="diokan-side-tabs__item">
                                <a href="#clients" className="diokan-side-tabs__item-link" data-toggle="tab">
                                <span className="diokan-side-tabs__item-icon">
                                <i className="fa fa-users" aria-hidden="true"></i>
                                </span>
                                    Clients
                                </a>
                            </li>
                            <li className="diokan-side-tabs__item">
                                <a href="#earning" className="diokan-side-tabs__item-link" data-toggle="tab">
                                <span className="diokan-side-tabs__item-icon">
                                    <i className="fa fa-bar-chart" aria-hidden="true"></i>
                                </span>
                                    Earnings
                                </a>
                            </li>
                            <li className="diokan-side-tabs__item">
                                <a href="#payments" className="diokan-side-tabs__item-link" data-toggle="tab">
                                <span className="diokan-side-tabs__item-icon">
                                <i className="fa fa-credit-card" aria-hidden="true"></i>
                                </span>
                                    Payments
                                </a>
                            </li>
                            <li className="diokan-side-tabs__item">
                                <a href="#notifications" className="diokan-side-tabs__item-link" data-toggle="tab">
                                <span className="diokan-side-tabs__item-icon">
                                <i className="fa fa-bell" aria-hidden="true"></i>
                                </span>
                                    Notifications
                                </a>
                            </li>
                            <li className="diokan-side-tabs__item">
                                <a href="#resources" className="diokan-side-tabs__item-link" data-toggle="tab">
                                <span className="diokan-side-tabs__item-icon">
                                <i className="fa fa-book" aria-hidden="true"></i>
                                </span>
                                    Resources
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="diokan-sidebar__bottom">
                        <div className="diokan-sidebar-info">
                            <button className="diokan-btn diokan-messages-box" data-message-count="3">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                            </button>
                            <div className="diokan-user-box">
                                <div className="diokan-user-box__logo">
                                    <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                                </div>
                                <div className="diokan-user-box__name">
                                    Trisha
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="diokan-sidebar-tab-content">
                    <div className="diokan-tab-pane" id="dashboard">
                        <div className="diokan-sidebar-tab-content__close">
                            <button className="diokan-btn diokan-btn-close diokan-btn-close__small">
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div className="diokan-user-state">
                            <div className="diokan-user-state__name">
                                Trisha Hensley
                            </div>
                            <div className="diokan-dropdown diokan-dropdown__sidebar">
                                <button className="diokan-btn diokan-dropdown-toggle diokan-dropdown-toggle__user-state">
                                    Approved
                                    <span className="diokan-dropdown-caret diokan-dropdown-caret__right">
                                        <i className="fa fa-chevron-down" aria-hidden="true"></i>
                                    </span>
                                </button>
                                <div className="diokan-dropdown-panel  diokan-dropdown-panel__corner-left">
                                    <div className="diokan-dropdown-panel__intro">
                                            <span className="diokan-dropdown-panel__intro-icon">
                                                <i className="fa fa-check" aria-hidden="true"></i>
                                            </span>
                                            Portfolio
                                    </div>
                                    <ul className="diokan-dropdown-menu">
                                        <li className="diokan-dropdown-menu__item">
                                            <a href="javascript:;" className="diokan-dropdown-menu__item-link">Unapproved</a>
                                        </li>
                                        <li className="diokan-dropdown-menu__item">
                                            <a href="javascript:;" className="diokan-dropdown-menu__item-link">Needs Review</a>
                                        </li>
                                        <li className="diokan-dropdown-menu__item diokan-dropdown-menu__item_active">
                                            <a href="javascript:;" className="diokan-dropdown-menu__item-link">Approved</a>
                                        </li>
                                        <li className="diokan-dropdown-menu__item">
                                            <a href="javascript:;" className="diokan-dropdown-menu__item-link">Blocked</a>
                                        </li>
                                        <li className="diokan-dropdown-menu__item">
                                            <a href="javascript:;" className="diokan-dropdown-menu__item-link">Deleted</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <ul className="diokan-side-menu">
                            <li className="diokan-side-menu__item">
                                <a href="" className="diokan-side-menu__item-link active">Settings</a>
                            </li>
                            <li className="diokan-side-menu__item">
                                <a href="" className="diokan-side-menu__item-link">Public Profile</a>
                            </li>
                            <li className="diokan-side-menu__item">
                                <a href="" className="diokan-side-menu__item-link">Portfolio</a>
                            </li>
                            <li className="diokan-side-menu__item">
                                <a href="" className="diokan-side-menu__item-link">Sessions</a>
                            </li>
                            <li className="diokan-side-menu__item">
                                <a href="" className="diokan-side-menu__item-link">Earnings</a>
                            </li>
                            <li className="diokan-side-menu__item">
                                <a href="" className="diokan-side-menu__item-link">Billing and payments</a>
                            </li>
                            <li className="diokan-side-menu__item">
                                <a href="" className="diokan-side-menu__item-link">Inbox</a>
                            </li>
                        </ul>
                    </div>
                    <div className="diokan-tab-pane" id="photographers">
                        <div className="diokan-sidebar-tab-content__close">
                            <button className="diokan-btn diokan-btn-close diokan-btn-close__small">
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div className="diokan-user-state">
                            <div className="diokan-user-state__name">
                                Trisha Hensley
                            </div>
                            <div className="diokan-dropdown diokan-dropdown__sidebar">
                                <button className="diokan-btn diokan-dropdown-toggle diokan-dropdown-toggle__user-state">
                                    Approved
                                    <span className="diokan-dropdown-caret diokan-dropdown-caret__right">
                                        <i className="fa fa-chevron-down" aria-hidden="true"></i>
                                    </span>
                                </button>
                                <div className="diokan-dropdown-panel  diokan-dropdown-panel__corner-left">
                                    <div className="diokan-dropdown-panel__intro">
                                            <span className="diokan-dropdown-panel__intro-icon">
                                                <i className="fa fa-check" aria-hidden="true"></i>
                                            </span>
                                        Portfolio
                                    </div>
                                    <ul className="diokan-dropdown-menu">
                                        <li className="diokan-dropdown-menu__item">
                                            <a href="javascript:;" className="diokan-dropdown-menu__item-link">Unapproved</a>
                                        </li>
                                        <li className="diokan-dropdown-menu__item">
                                            <a href="javascript:;" className="diokan-dropdown-menu__item-link">Needs Review</a>
                                        </li>
                                        <li className="diokan-dropdown-menu__item diokan-dropdown-menu__item_active">
                                            <a href="javascript:;" className="diokan-dropdown-menu__item-link">Approved</a>
                                        </li>
                                        <li className="diokan-dropdown-menu__item">
                                            <a href="javascript:;" className="diokan-dropdown-menu__item-link">Blocked</a>
                                        </li>
                                        <li className="diokan-dropdown-menu__item">
                                            <a href="javascript:;" className="diokan-dropdown-menu__item-link">Deleted</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <ul className="diokan-side-menu">
                            <li className="diokan-side-menu__item">
                                <a href="" className="diokan-side-menu__item-link active">Settings</a>
                            </li>
                            <li className="diokan-side-menu__item">
                                <a href="" className="diokan-side-menu__item-link">Public Profile</a>
                            </li>
                            <li className="diokan-side-menu__item">
                                <a href="" className="diokan-side-menu__item-link">Portfolio</a>
                            </li>
                            <li className="diokan-side-menu__item">
                                <a href="" className="diokan-side-menu__item-link">Sessions</a>
                            </li>
                            <li className="diokan-side-menu__item">
                                <a href="" className="diokan-side-menu__item-link">Earnings</a>
                            </li>
                            <li className="diokan-side-menu__item">
                                <a href="" className="diokan-side-menu__item-link">Billing and payments</a>
                            </li>
                            <li className="diokan-side-menu__item">
                                <a href="" className="diokan-side-menu__item-link">Inbox</a>
                            </li>
                        </ul>
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