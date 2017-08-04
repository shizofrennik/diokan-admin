import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import GalleryItem from 'components/GalleryItem';
import Notification from 'components/Notification';

class PortfolioReviewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolio: [
        {
          imagePreviewUrl: "./images/bitmap.png"
        },
        {
          imagePreviewUrl: "./images/bitmap.png"
        },
        {
          imagePreviewUrl: "./images/bitmap.png"
        },
        {
          imagePreviewUrl: "./images/bitmap.png"
        },
        {
          imagePreviewUrl: "./images/bitmap.png"
        },
        {
          imagePreviewUrl: "./images/bitmap.png"
        },
        {
          imagePreviewUrl: "./images/bitmap.png"
        },
        {
          imagePreviewUrl: "./images/bitmap.png"
        },
        {
          imagePreviewUrl: "./images/bitmap.png"
        }
      ]
    }
  }

  getImages() {
    return this.state.portfolio.map((image, index) => <GalleryItem file={image} key={index}/>)
  }
  
  render() {
    return(
      <main>
        <Notification notificationType="secondary">
          We are currently reviewing your portfolio. Please allow 1-2 business days for approval.
        </Notification>
        <div className="diokan-main-inner diokan-main-inner__portfolio">
          <div className="diokan-gallery">
            {this.getImages()}
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

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioReviewContainer)