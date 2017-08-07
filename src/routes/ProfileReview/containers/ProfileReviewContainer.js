import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import DashboardMenu from '../../Dashboard/components/DashboardMenu';

class ProfileReviewContainer extends React.Component {
  render() {
    return (
      <main>
        <DashboardMenu />
        <div className="diokan-main-inner diokan-main-inner__settings diokan-main-inner__side-menu">
          <div className="diokan-settings">
            <div className="diokan-tab">
              <ul className="diokan-tab-nav">
                <li className="diokan-tab-nav__item active">
                  <a href="#1b" className="diokan-tab-nav__item-link" data-toggle="tab">
                    Account
                  </a>
                </li>
                <li className="diokan-tab-nav__item">
                  <a href="#2b" className="diokan-tab-nav__item-link" data-toggle="tab">
                    Address
                  </a>
                </li>
                <li className="diokan-tab-nav__item">
                  <a href="#3b" className="diokan-tab-nav__item-link" data-toggle="tab">
                    Payment Info
                  </a>
                </li>
                <li className="diokan-tab-nav__item">
                  <a href="#4b" className="diokan-tab-nav__item-link" data-toggle="tab">
                    Notifications
                  </a>
                </li>
              </ul>
            </div>
            <div className="diokan-settings-box">
              <div className="diokan-tab-content">
                <div className="diokan-tab-pane active" id="1b">
                  <form action="" className="diokan-form diokan-form-settings">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="diokan-form-group">
                          <label className="diokan-form-label">
                            Full Name
                          </label>
                          <input type="text" className="diokan-form-control diokan-placeholder-light" placeholder="Enter Full Name"/>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="diokan-form-group">
                          <label className="diokan-form-label">
                            Display Name
                          </label>
                          <input type="text" className="diokan-form-control diokan-placeholder-light" placeholder="Enter Display Name"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="diokan-form-group">
                          <label className="diokan-form-label">
                            Email
                          </label>
                          <input type="text" className="diokan-form-control diokan-placeholder-light" placeholder="Enter Email"/>
                        </div>
                      </div>
                    </div>
                    <div className="row diokan-blocks-equal">
                      <div className="col-md-3">
                        <div className="diokan-form-group">
                          <label className="diokan-form-label">
                            Company Name
                          </label>
                          <input type="text" className="diokan-form-control diokan-placeholder-light" placeholder="Enter Company Name"/>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="diokan-form-group">
                          <label className="diokan-form-label">
                            Tax #
                          </label>
                          <input type="text" className="diokan-form-control diokan-placeholder-light" placeholder="Enter Tax #"/>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="diokan-form-group">
                          <label className="diokan-form-label">
                            Phone
                          </label>
                          <input type="text" className="diokan-form-control diokan-placeholder-light" placeholder="Enter Phone"/>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="diokan-account-password">
                          <label className="diokan-form-label">
                            Password
                          </label>
                          <div className="diokan-account-password__description">
                            <div className="diokan-account-password__field">
                              **********
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-9">
                        <div className="diokan-confirmation">
                          <label className="diokan-custom-input diokan-custom-input__big" htmlFor="checkbox-1">
                            <input type="checkbox" id="checkbox-1" className="diokan-input"/>
                            <span className="diokan-custom-input__checkbox"/>
                            <span className="diokan-form-label">I’m available for custom photography jobs</span>
                          </label>
                          <div className="diokan-confirmation__note">
                            Clients will be able to find your profile and contact you to book a photo session
                          </div>
                        </div>
                      </div>
                      {/*this.getIdUpload()*/}
                    </div>
                  </form>
                  <div className="diokan-controls-right">
                    <div className="diokan-btn diokan-btn-primary diokan-btn-primary__settings">
                      Save
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}


const mapStateToProps = (state, props) => {
  return ({})
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileReviewContainer)