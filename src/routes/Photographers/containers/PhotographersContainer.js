import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import classNames from 'classnames';

class PhotographersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilter: "All",
      unapprovedCount: 0,
      photographers: [
        {
          name: "John Doe",
          email: "john.doe@company.com",
          phone: "555-316-7631",
          status: "Unapproved",
          updated: "43 min ago",
          earnings: "$0.00",
          rank: "0"
        },
        {
          name: "Peter Doe",
          email: "peter.doe@company.com",
          phone: "555-516-7632",
          status: "Unapproved",
          updated: "53 min ago",
          earnings: "$0.00",
          rank: "0"
        },
        {
          name: "Trisha Hensley",
          email: "trisha@company.com",
          phone: "555-411-7631",
          status: "Needs review",
          updated: "1 hour ago",
          earnings: "$0.00",
          rank: "0"
        },
        {
          name: "Aneeta Armstead",
          email: "aneeta.armstead@company.com",
          phone: "555-211-7633",
          status: "Approved",
          updated: "Yesterday",
          earnings: "$12,768.47",
          rank: "3"
        },
        {
          name: "Christine Roy",
          email: "christine.roy@gmail.com",
          phone: "555-811-7233",
          status: "Blocked",
          updated: "27-May-2017",
          earnings: "$5,908.78",
          rank: "1"
        },
        {
          name: "Lewis Laforge",
          email: "lewis.laforge@gmail.com",
          phone: "555-011-7233",
          status: "Deleted",
          updated: "28-May-2017",
          earnings: "$34,654.90",
          rank: "4"
        }
      ]
    };

    this.setFilter = this.setFilter.bind(this);
  }

  componentWillMount() {
    let unapproved = this.state.photographers.filter(photographer => photographer.status === 'Unapproved');
    this.setState({unapprovedCount: unapproved.length});
  }

  setFilter(currentFilter) {
    this.setState({currentFilter})
  }

  getStatusStyle(status) {
    switch(status) {
      case 'Unapproved':
        return 'unapproved';
      case 'Needs review':
        return 'waiting';
      case 'Approved':
        return 'approved';
      case 'Blocked':
        return 'blocked';
      case 'Deleted':
        return 'deleted';
      default:
        return '';
    }
  }

  getFilteredPhotographers(filter) {
    switch(filter) {
      case 'All':
        return this.state.photographers;
      case 'Unapproved':
        return this.state.photographers.filter((photographer => photographer.status === 'Unapproved'));
      case 'Needs Review':
        return this.state.photographers.filter((photographer => photographer.status === 'Needs review'));
      case 'Approved':
        return this.state.photographers.filter((photographer => photographer.status === 'Approved'));
      case 'Blocked':
        return this.state.photographers.filter((photographer => photographer.status === 'Blocked'));
      case 'Deleted':
        return this.state.photographers.filter((photographer => photographer.status === 'Deleted'));
      default: 
        return [];
    }
  }

  getPhotographers() {
    let {currentFilter} = this.state;
    return this.getFilteredPhotographers(currentFilter).map(photographer => (
      (
        <Link to="/profile-review" className="diokan-table__row" key={photographer.email}>
          <div className="diokan-table__cell">
            {photographer.name}
          </div>
          <div className="diokan-table__cell">
            {photographer.email}
          </div>
          <div className="diokan-table__cell">
            {photographer.phone}
          </div>
          <div className="diokan-table__cell">
          <span className={`diokan-state__${this.getStatusStyle(photographer.status)}`}>
            {photographer.status}
          </span>
          </div>
          <div className="diokan-table__cell">
            {photographer.updated}
          </div>
          <div className="diokan-table__cell">
            {photographer.earnings}
          </div>
          <div className="diokan-table__cell">
            {photographer.rank}
          </div>
        </Link>
      )
    ))
  }

  render() {
    return (
      <main>
        <div className="diokan-main-inner diokan-main-inner__photographers">
          <div className="diokan-photographers">
            <div className="diokan-photographers__intro">
              <div className="diokan-table-filter">
                <ul className="diokan-filter-menu">
                  <li className={classNames("diokan-filter-menu__item", {"active": this.state.currentFilter === 'All'})}>
                    <a 
                      href="#" 
                      onClick={() => this.setFilter('All')} 
                      className="diokan-filter-menu__item-link">All</a>
                  </li>
                  <li className={classNames("diokan-filter-menu__item", {"active": this.state.currentFilter === 'Unapproved'})}>
                    <a 
                      href="#" 
                      onClick={() => this.setFilter('Unapproved')} 
                      className="diokan-filter-menu__item-link">Unapproved</a>
                    {!!this.state.unapprovedCount &&
                    (<div className="diokan-filter-menu__item-counter">
                      {this.state.unapprovedCount}
                    </div>)}
                  </li>
                  <li className={classNames("diokan-filter-menu__item", {"active": this.state.currentFilter === 'Needs Review'})}>
                    <a 
                      href="#" 
                      onClick={() => this.setFilter('Needs Review')} 
                      className="diokan-filter-menu__item-link">Needs Review</a>
                  </li>
                  <li className={classNames("diokan-filter-menu__item", {"active": this.state.currentFilter === 'Approved'})}>
                    <a 
                      href="#" 
                      onClick={() => this.setFilter('Approved')} 
                      className="diokan-filter-menu__item-link">Approved</a>
                  </li>
                  <li className={classNames("diokan-filter-menu__item", {"active": this.state.currentFilter === 'Blocked'})}>
                    <a 
                      href="#" 
                      onClick={() => this.setFilter('Blocked')} 
                      className="diokan-filter-menu__item-link">Blocked</a>
                  </li>
                  <li className={classNames("diokan-filter-menu__item", {"active": this.state.currentFilter === 'Deleted'})}>
                    <a 
                      href="#" 
                      onClick={() => this.setFilter('Deleted')} 
                      className="diokan-filter-menu__item-link">Deleted</a>
                  </li>
                </ul>
              </div>
              <div className="diokan-photographers__intro-group">
                <div className="diokan-search-box">
                  <input type="text" className="diokan-search-field" placeholder="Search" />
                    <button className="diokan-btn diokan-btn-search">
                      <i className="fa fa-search" aria-hidden="true" />
                    </button>
                </div>
                <button className="diokan-btn diokan-btn-plus">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                    <path 
                      fill="#FFF" 
                      fillRule="evenodd" 
                      d="M7.888 17.619v-7.412H.476V7.673h7.412V.275h2.534v7.398h7.397v2.534h-7.397v7.412z"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="diokan-photographers__content">
              <div className="diokan-table diokan-table__photographers">
                <div className="diokan-table__header">
                  <div className="diokan-table__row">
                    <div className="diokan-table__cell">
                      Photographer
                    </div>
                    <div className="diokan-table__cell">
                      Email
                    </div>
                    <div className="diokan-table__cell">
                      Phone
                    </div>
                    <div className="diokan-table__cell">
                      Status
                    </div>
                    <div className="diokan-table__cell">
                      Updated
                      <div className="diokan-table__cell-icon">
                        <i className="fa fa-chevron-down" />
                      </div>
                    </div>
                    <div className="diokan-table__cell">
                      Earnings
                    </div>
                    <div className="diokan-table__cell">
                      Rank
                    </div>
                  </div>
                </div>
                <div className="diokan-table__body">
                  {this.getPhotographers()}
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

export default connect(mapStateToProps, mapDispatchToProps)(PhotographersContainer)