import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class DashboardContainer extends React.Component {
  render() {
    return (
      <main className="diokan-main">
        <div className="diokan-notification">
          <div className="diokan-notification__description">
            Start earning money for your photos! &nbsp;
            <Link to="settings" className="diokan-notification__link">Please, set up your account</Link>
            &nbsp; and &nbsp;
            <Link to="portfolio" className="diokan-notification__link">upload 10 portfolio photos</Link>
            &nbsp; to get started.
          </div>
          <div className="diokan-notification__action">
            <button className="diokan-btn diokan-btn-close">
              <i className="fa fa-times" aria-hidden="true"/>
            </button>
          </div>
        </div>
        <div className="diokan-main-inner">
          <div className="diokan-main__filter">
            <div className="diokan-dropdown">
              <button className="diokan-btn diokan-dropdown-toggle">
                this month
                <span className="diokan-dropdown-caret">
                  <i className="fa fa-chevron-down" aria-hidden="true"/>
                </span>
              </button>
              <ul className="diokan-dropdown-menu">
                <li className="diokan-dropdown-menu__item">
                  <a href="javascript:;" className="diokan-dropdown-menu__item-link">this week</a>
                </li>
                <li className="diokan-dropdown-menu__item diokan-dropdown-menu__item_active">
                  <a href="javascript:;" className="diokan-dropdown-menu__item-link">this month</a>
                </li>
                <li className="diokan-dropdown-menu__item">
                  <a href="javascript:;" className="diokan-dropdown-menu__item-link">this year</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row diokan-block-group">
            <div className="col-md-4">
              <div className="diokan-card-statistic">
                <div className="diokan-card-statistic__icon">
                  <i className="fa fa-camera-retro" aria-hidden="true"/>
                </div>
                <div className="diokan-card-statistic__description">
                  <div className="diokan-card-statistic__value">
                    3
                  </div>
                  <div className="diokan-card-statistic__title">
                    new sessions
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="diokan-card-statistic">
                <div className="diokan-card-statistic__icon">
                  <i className="fa fa-usd" aria-hidden="true"/>
                </div>
                <div className="diokan-card-statistic__description">
                  <div className="diokan-card-statistic__value">
                    15
                  </div>
                  <div className="diokan-card-statistic__title">
                    new sales
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="diokan-card-statistic">
                <div className="diokan-card-statistic__icon">
                  <i className="fa fa-bar-chart" aria-hidden="true"/>
                </div>
                <div className="diokan-card-statistic__description">
                  <div className="diokan-card-statistic__value">
                    $249.30
                  </div>
                  <div className="diokan-card-statistic__title">
                    earnings
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row diokan-block-group diokan-blocks-equal">
            <div className="col-md-4">
              <div className="diokan-check-list">
                <div className="diokan-check-list__header">
                  <div className="diokan-title-secondary">
                    Tasks
                    <span className="diokan-counter">0/2</span>
                  </div>
                </div>
                <div className="diokan-check-list__item">
                  <div className="diokan-check-list__item-title-wrap">
                    <label className="diokan-custom-input" htmlFor="checkbox-1">
                      <input type="checkbox" id="checkbox-1" className="diokan-input"/>
                      <span className="diokan-custom-input__checkbox"/>
                        <span className="diokan-check-list__item-title">
                          Confirm your identity
                        </span>
                    </label>
                  </div>
                  <div className="diokan-check-list__item-description">
                    <p>
                      Before you can start earning money, we
                      need to verify your identity. It keeps your
                      work safe and helps speed up the payment
                      process.
                    </p>
                    <p>
                      Please add a full size image of your passport,
                      driver’s license, or state identification.
                    </p>
                  </div>
                  <div className="diokan-check-list__action-group">
                    <a href="" className="diokan-link diokan-link__small">Upload</a>
                    <a href="" className="diokan-link diokan-link__small">Find out more</a>
                  </div>
                </div>
                <div className="diokan-check-list__item">
                  <div className="diokan-check-list__item-title-wrap">
                    <label className="diokan-custom-input" htmlFor="checkbox-2">
                      <input type="checkbox" id="checkbox-2" className="diokan-input"/>
                      <span className="diokan-custom-input__checkbox"/>
                        <span className="diokan-check-list__item-title">
                          Upload 10 portfolio photos
                        </span>
                    </label>
                  </div>
                  <div className="diokan-check-list__item-description">
                    <p>
                      We can’t wait to see your best work. Please
                      upload your 10 best images so we can
                      approve your account. Please allow 1-2
                      business days for us to review.
                    </p>
                  </div>
                  <div className="diokan-check-list__action-group">
                    <a href="" className="diokan-link diokan-link__small">Upload</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="diokan-news">
                <div className="diokan-news__header">
                  <div className="diokan-title-secondary">
                    Resources
                  </div>
                  <a href="" className="diokan-link diokan-link__small">
                    View all resources
                  </a>
                </div>
                <div className="diokan-news-inner diokan-slider diokan-slider-news">
                  <div>
                    <div className="diokan-news__item">
                      <div className="diokan-news__item-image">
                        <img
                          className="img-responsive"
                          src="./images/resources.png"
                          srcSet="./images/resources@2x.png 2x, ./images/resources@3x.png 3x"
                          alt="Diokan"/>
                      </div>
                      <div className="diokan-news-list">
                        <div className="diokan-news-list__item">
                          <div className="diokan-news-list__item-description">
                            <p>
                              10 awesome photo enhancement plugins for
                              Photoshop you need to try
                            </p>
                          </div>
                          <a href="" className="diokan-link diokan-link__small">Find out
                            more</a>
                        </div>
                        <div className="diokan-news-list__item">
                          <div className="diokan-news-list__item-description">
                            <p>
                              RAW vs. JPEG – the real story
                            </p>
                          </div>
                          <a href="" className="diokan-link diokan-link__small">Find out
                            more</a>
                        </div>
                        <div className="diokan-news-list__item">
                          <div className="diokan-news-list__item-description">
                            <p>
                              Understanding White Balance
                            </p>
                          </div>
                          <a href="" className="diokan-link diokan-link__small">Find out
                            more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="diokan-news__item">
                      <div className="diokan-news__item-image">
                        <img
                          className="img-responsive"
                          src="./images/resources.png"
                          srcSet="./images/resources@2x.png 2x, ./images/resources@3x.png 3x"
                          alt="Diokan"/>
                      </div>
                      <div className="diokan-news-list">
                        <div className="diokan-news-list__item">
                          <div className="diokan-news-list__item-description">
                            <p>
                              10 awesome photo enhancement plugins for
                              Photoshop you need to try
                            </p>
                          </div>
                          <a href="" className="diokan-link diokan-link__small">Find out
                            more</a>
                        </div>
                        <div className="diokan-news-list__item">
                          <div className="diokan-news-list__item-description">
                            <p>
                              RAW vs. JPEG – the real story
                            </p>
                          </div>
                          <a href="" className="diokan-link diokan-link__small">Find out
                            more</a>
                        </div>
                        <div className="diokan-news-list__item">
                          <div className="diokan-news-list__item-description">
                            <p>
                              Understanding White Balance
                            </p>
                          </div>
                          <a href="" className="diokan-link diokan-link__small">Find out
                            more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="diokan-news__item">
                      <div className="diokan-news__item-image">
                        <img
                          className="img-responsive"
                          src="./images/resources.png"
                          srcSet="./images/resources@2x.png 2x, ./images/resources@3x.png 3x"
                          alt="Diokan"/>
                      </div>
                      <div className="diokan-news-list">
                        <div className="diokan-news-list__item">
                          <div className="diokan-news-list__item-description">
                            <p>
                              10 awesome photo enhancement plugins for
                              Photoshop you need to try
                            </p>
                          </div>
                          <a href="" className="diokan-link diokan-link__small">Find out
                            more</a>
                        </div>
                        <div className="diokan-news-list__item">
                          <div className="diokan-news-list__item-description">
                            <p>
                              RAW vs. JPEG – the real story
                            </p>
                          </div>
                          <a href="" className="diokan-link diokan-link__small">Find out
                            more</a>
                        </div>
                        <div className="diokan-news-list__item">
                          <div className="diokan-news-list__item-description">
                            <p>
                              Understanding White Balance
                            </p>
                          </div>
                          <a href="" className="diokan-link diokan-link__small">Find out
                            more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="diokan-profile-card">
                <div className="diokan-profile-card__header">
                  <div className="diokan-title-secondary">
                    My Profile
                  </div>
                </div>
                <div className="diokan-profile-card-inner">
                  <div className="diokan-profile-card-intro">
                    <div className="diokan-profile-card__info">
                      <div className="diokan-progress-bar-profile">
                        <span className="diokan-progress-bar-profile-fill" style={{width: "5%"}}/>
                      </div>
                      <div className="diokan-remark">
                        5% complete
                      </div>
                    </div>
                    <div className="diokan-profile-card__logo">
                      <i className="fa fa-user-circle-o" aria-hidden="true"/>
                    </div>
                  </div>
                  <div className="diokan-profile-card__content">
                    <div className="diokan-profile-card__list">
                      <ul className="diokan-list diokan-list-with-icon">
                        <li className="diokan-list__item">
                          <div className="diokan-list__item-icon">
                            <i className="fa fa-plus" aria-hidden="true"/>
                          </div>
                          <div className="diokan-list__item-text">
                            Confirm email address <span
                            className="diokan-list__item-text_colored">(+5%)</span>
                          </div>

                        </li>
                        <li className="diokan-list__item">
                          <div className="diokan-list__item-icon">
                            <i className="fa fa-plus" aria-hidden="true"/>
                          </div>
                          <div className="diokan-list__item-text">
                            Add photos to your portfolio <span
                            className="diokan-list__item-text_colored">(+10%)</span>
                          </div>
                        </li>
                        <li className="diokan-list__item">
                          <div className="diokan-list__item-icon">
                            <i className="fa fa-plus" aria-hidden="true"/>
                          </div>
                          <div className="diokan-list__item-text">
                            Confirm your identity <span
                            className="diokan-list__item-text_colored">(+10%)</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="diokan-profile-card__link-group">
                      <div className="diokan-profile-card__link">
                        <a href="" className="diokan-link diokan-link__small">Edit my
                          profile</a>
                      </div>
                      <div className="diokan-profile-card__link">
                        <a href="" className="diokan-link diokan-link__small">View my profile as
                          others see it</a>
                      </div>
                    </div>
                  </div>
                  <div className="diokan-profile-statistic">
                    <div className="diokan-profile-statistic__item">
                      <div className="diokan-profile-statistic__item-group">
                        <div className="diokan-profile-statistic__item-icon">
                          <i className="fa fa-eye" aria-hidden="true"/>
                        </div>
                        <div className="diokan-profile-statistic__item-title">
                          new profile views
                        </div>
                      </div>
                      <div className="diokan-profile-statistic__item-value">
                        15
                      </div>
                    </div>
                    <div className="diokan-profile-statistic__item">
                      <div className="diokan-profile-statistic__item-group">
                        <div className="diokan-profile-statistic__item-icon">
                          <i className="fa fa-users" aria-hidden="true"/>
                        </div>
                        <div className="diokan-profile-statistic__item-title">
                          followers
                        </div>
                      </div>
                      <div className="diokan-profile-statistic__item-value">
                        126
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="diokan-announcements">
                <div className="diokan-announcements__header">
                  Announcements
                </div>
                <div className="diokan-announcements-inner">
                  <div className="diokan-announcements__item">
                    <div className="diokan-announcements__item-image">
                      <img
                        className="img-responsive"
                        src="./images/announcement-example-1.png"
                        srcSet="./images/announcement-example-1@2x.png 2x, ./images/announcement-example-1@3x.png 3x"
                        alt="Diokan"/>
                    </div>
                    <div className="diokan-announcements__item-group">
                      <div className="diokan-announcements__item-description">
                        Diokan T-shirt
                        give-away!
                      </div>
                      <div className="diokan-announcements__item-link">
                        <a href="" className="diokan-link diokan-link__small">Find out more</a>
                      </div>
                    </div>

                  </div>
                  <div className="diokan-announcements__item">
                    <div className="diokan-announcements__item-image">
                      <img
                        className="img-responsive"
                        src="./images/announcement-example-2.png"
                        srcSet="./images/announcement-example-2@2x.png 2x, ./images/announcement-example-2@3x.png 3x"
                        alt="Diokan"/>
                    </div>
                    <div className="diokan-announcements__item-group">
                      <div className="diokan-announcements__item-description">
                        Introducing our new pricing plans
                      </div>
                      <div className="diokan-announcements__item-link">
                        <a href="" className="diokan-link diokan-link__small">Find out more</a>
                      </div>
                    </div>

                  </div>
                  <div className="diokan-announcements__item">
                    <div className="diokan-announcements__item-image">
                      <img
                        className="img-responsive"
                        src="./images/announcement-example-3.png"
                        srcSet="./images/announcement-example-3@2x.png 2x, ./images/announcement-example-3@3x.png 3x"
                        alt="Diokan"/>
                    </div>
                    <div className="diokan-announcements__item-group">
                      <div className="diokan-announcements__item-description">
                        Frederick D. Ford
                        Photographer
                      </div>
                      <div className="diokan-announcements__item-link">
                        <a href="" className="diokan-link diokan-link__small">Find out more</a>
                      </div>
                    </div>

                  </div>
                  <div className="diokan-announcements__item">
                    <div className="diokan-announcements__item-image">
                      <img
                        className="img-responsive"
                        src="./images/announcement-example-4.png"
                        srcSet="./images/announcement-example-4@2x.png 2x, ./images/announcement-example-4@3x.png 3x"
                        alt="Diokan"/>
                    </div>
                    <div className="diokan-announcements__item-group">
                      <div className="diokan-announcements__item-description">
                        New features added
                        to our app
                      </div>
                      <div className="diokan-announcements__item-link">
                        <a href="" className="diokan-link diokan-link__small">Find out more</a>
                      </div>
                    </div>

                  </div>
                  <div className="diokan-announcements__item">
                    <div className="diokan-announcements__item-image">
                      <img
                        className="img-responsive"
                        src="./images/announcement-example-5.png"
                        srcSet="./images/announcement-example-5@2x.png 2x, ./images/announcement-example-5@3x.png 3x"
                        alt="Diokan"/>
                    </div>
                    <div className="diokan-announcements__item-group">
                      <div className="diokan-announcements__item-description">
                        New color
                        correction tutorial
                      </div>
                      <div className="diokan-announcements__item-link">
                        <a href="" className="diokan-link diokan-link__small">Find out more</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state, props) => {
  return ({})
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)