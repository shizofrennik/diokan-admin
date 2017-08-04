import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {IndexLink, Link} from 'react-router';
import {logo} from 'styles/svg/svgs.js';
import SideMenuAccount from '../SideMenuAccount';

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
                            <SideMenuAccount/>
                        </div>
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