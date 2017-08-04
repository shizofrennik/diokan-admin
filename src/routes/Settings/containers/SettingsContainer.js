import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class SettingsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
      idUploaded: false
    };

    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleImageDelete = this.handleImageDelete.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
        idUploaded: true
      });
    };

    reader.readAsDataURL(file)
  }

  handleImageDelete() {
    this.setState({
      file: '',
      imagePreviewUrl: '',
      idUploaded: false
    })
  }

  getIdUpload() {
    if (this.state.idUploaded) {
      return (
        <div className="col-md-3">
          <div className="diokan-account-upload">
            <div className="diokan-form-label">
              Identification
            </div>
            <div className="diokan-account-upload__id-wrapper">
              <div className="diokan-account-upload__img-preview">
                <img src={this.state.imagePreviewUrl} alt="user id"/>
              </div>
              <button
                className="diokan-btn diokan-btn-link diokan-btn-link__underline"
                onClick={this.handleImageDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="col-md-3">
          <div className="diokan-account-upload">
            <div className="diokan-form-label">
              Identification
            </div>
            <input
              type="file"
              onChange={this.handleImageChange}
              name="file"
              style={{display: "none"}}
              id="file"/>
            <label
              htmlFor="file"
              className="diokan-account-upload__description">
              Upload
            </label>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <main className="diokan-main">
        <div className="diokan-main-inner diokan-main-inner__settings">
          <div className="diokan-settings">
            <div className="diokan-tabs">
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
                          <input type="text" className="diokan-form-control" placeholder="Trisha Hensley"/>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="diokan-form-group">
                          <label className="diokan-form-label">
                            Display Name
                          </label>
                          <input type="text" className="diokan-form-control" placeholder="Trisha H"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="diokan-form-group">
                          <label className="diokan-form-label">
                            Email
                          </label>
                          <input type="text" className="diokan-form-control" placeholder="anneta.armstrad@company.com"/>
                        </div>
                      </div>
                    </div>
                    <div className="row diokan-blocks-equal">
                      <div className="col-md-3">
                        <div className="diokan-form-group">
                          <label className="diokan-form-label">
                            Company Name
                          </label>
                          <input type="text" className="diokan-form-control" placeholder="Hensley Photography"/>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="diokan-form-group">
                          <label className="diokan-form-label">
                            Tax #
                          </label>
                          <input type="text" className="diokan-form-control" placeholder="1579 4458001"/>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="diokan-form-group">
                          <label className="diokan-form-label">
                            Phone
                          </label>
                          <input type="text" className="diokan-form-control" placeholder="555-435-8564"/>
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
                            <button className="diokan-btn diokan-btn-link diokan-btn-link__underline">
                              Change
                            </button>
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
                      {this.getIdUpload()}
                    </div>
                  </form>
                  <div className="diokan-controls-right">
                    <div className="diokan-btn diokan-btn-primary diokan-btn-primary__settings">
                      Save
                    </div>
                  </div>
                </div>
                <div className="diokan-tab-pane" id="2b">
                  <form action="" className="diokan-form diokan-form-settings">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="diokan-form-group">
                          <label className="diokan-form-label">
                            Country
                          </label>
                          <select name="" id="" className="diokan-form-control diokan-form-control-select">
                            <option value="">Belgium</option>
                            <option value="">Canada</option>
                            <option value="">Italy</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="diokan-form-group">
                          <label className="diokan-form-label">
                            City
                          </label>
                          <input type="text" className="diokan-form-control" placeholder="Brussels"/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="diokan-form-group diokan-form-group__double">
                          <label className="diokan-form-label">
                            Address
                          </label>
                          <input type="text" className="diokan-form-control diokan-placeholder-light"
                                 placeholder="Address Line 1"/>
                          <input type="text" className="diokan-form-control diokan-placeholder-light"
                                 placeholder="Address Line 2 (Apartment #, Suite #)"/>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="diokan-form-group">
                          <label className="diokan-form-label">
                            Province
                          </label>
                          <input type="text" className="diokan-form-control diokan-placeholder-light"
                                 placeholder="Enter Province"/>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="diokan-form-group">
                          <label className="diokan-form-label">
                            Zip Code
                          </label>
                          <input type="text" className="diokan-form-control diokan-placeholder-light"
                                 placeholder="Enter Zip Code"/>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="diokan-controls-right">
                    <div className="diokan-btn diokan-btn-primary diokan-btn-primary__settings">
                      Save
                    </div>
                  </div>
                </div>
                <div className="diokan-tab-pane" id="3b">
                  <div className="diokan-payment-info">
                    <div className="diokan-payment-info-card">
                      <div className="diokan-payment-info-card__icon diokan-payment-info-card__icon--active">
                        <i className="fa fa-university" aria-hidden="true"></i>
                      </div>
                      <div className="diokan-payment-info-card__description">
                        <div className="diokan-payment-info-card__title">
                          Direct Deposit - Hello Bank! Acct # ending 7034
                        </div>
                        <div className="diokan-payment-info-card__remark">
                          Default payment method
                        </div>
                      </div>
                    </div>
                    <div className="diokan-payment-info-card">
                      <div className="diokan-payment-info-card__icon">
                        <i className="fa fa-university" aria-hidden="true"></i>
                      </div>
                      <div className="diokan-payment-info-card__description">
                        <div className="diokan-payment-info-card__title">
                          Direct Deposit - Hello Bank! Acct # ending 7034
                        </div>
                      </div>
                    </div>
                    <div className="diokan-payment-info-card">
                      <div className="diokan-payment-info-card__icon">
                        <i className="fa fa-paypal" aria-hidden="true"></i>
                      </div>
                      <div className="diokan-payment-info-card__description">
                        <div className="diokan-payment-info-card__title">
                          PayPal - anneta.armstead@company.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="diokan-controls-right">
                    <button className="diokan-btn diokan-btn-primary">
                      Add Payment Method
                    </button>
                  </div>
                </div>
                <div className="diokan-tab-pane" id="4b">
                  <form action="" className="diokan-form diokan-form-notifications">
                    <div className="row diokan-confirmation-list-group">
                      <div className="col-md-6">
                        <div className="diokan-confirmation-list">
                          <div className="diokan-confirmation-list__item">
                            <label className="diokan-custom-input" htmlFor="checkbox-2">
                              <input type="checkbox" id="checkbox-2" className="diokan-input" checked/>
                              <span className="diokan-custom-input__checkbox"/>
                              <span className="diokan-form-label">Upload reminders</span>
                            </label>
                            <div className="diokan-confirmation-list__item-note">
                              Send me an email to remind me to upload client session photos
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="diokan-confirmation-list">
                          <div className="diokan-confirmation-list__item">
                            <label className="diokan-custom-input" htmlFor="checkbox-3">
                              <input type="checkbox" id="checkbox-3" className="diokan-input"/>
                              <span className="diokan-custom-input__checkbox"/>
                              <span className="diokan-form-label">Announcements</span>
                            </label>
                            <div className="diokan-confirmation-list__item-note">
                              Send me weekly emails with Diokan annoucements
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row diokan-confirmation-list-group">
                      <div className="col-md-6">
                        <div className="diokan-confirmation-list">
                          <div className="diokan-confirmation-list__item">
                            <label className="diokan-custom-input" htmlFor="checkbox-4">
                              <input type="checkbox" id="checkbox-4" className="diokan-input" checked/>
                              <span className="diokan-custom-input__checkbox"/>
                              <span className="diokan-form-label">Purchase notifications</span>
                            </label>
                            <div className="diokan-confirmation-list__item-note">
                              Send me an email when a client makes a purchase
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="diokan-confirmation-list">
                          <div className="diokan-confirmation-list__item">
                            <label className="diokan-custom-input" htmlFor="checkbox-5">
                              <input type="checkbox" id="checkbox-5" className="diokan-input" checked/>
                              <span className="diokan-custom-input__checkbox"/>
                              <span className="diokan-form-label">Reports</span>
                            </label>
                            <div className="diokan-confirmation-list__item-note">
                              Send me a weekly summary report of my activities and earnings
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="diokan-confirmation-list">
                          <div className="diokan-confirmation-list__item">
                            <label className="diokan-custom-input" htmlFor="checkbox-6">
                              <input type="checkbox" id="checkbox-6" className="diokan-input"/>
                              <span className="diokan-custom-input__checkbox"/>
                              <span className="diokan-form-label">Client review notifications</span>
                            </label>
                            <div className="diokan-confirmation-list__item-note">
                              Send me an email when a client writes a review
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="diokan-confirmation-list">
                          <div className="diokan-confirmation-list__item">
                            <label className="diokan-custom-input" htmlFor="checkbox-7">
                              <input type="checkbox" id="checkbox-7" className="diokan-input"/>
                              <span className="diokan-custom-input__checkbox"/>
                              <span className="diokan-form-label">Resources</span>
                            </label>
                            <div className="diokan-confirmation-list__item-note">
                              Send me emalis when new resources are published to the Diokan blog
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="diokan-controls-right">
                    <button className="diokan-btn diokan-btn-primary diokan-btn-primary__settings">
                      Save
                    </button>
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
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)