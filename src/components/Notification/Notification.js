import React from 'react';

class Notification extends React.Component {
  render() {
    return (
      <div className="diokan-notification">
        <div className="diokan-notification__description">
          {this.props.children}
        </div>
        <div className="diokan-notification__action">
          <button className="diokan-btn diokan-btn-close">
            <i className="fa fa-times" />
          </button>
        </div>
      </div>
    )
  }
}

export default Notification