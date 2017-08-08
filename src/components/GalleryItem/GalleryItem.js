import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class GalleryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    }
    
    this.handleMouseEnter = this.handleMouseEnter.bind(this); 
    this.handleMouseLeave = this.handleMouseLeave.bind(this); 
  }

  static propTypes = {
    file: PropTypes.object,
    deleteFile: PropTypes.func,
    admin: PropTypes.bool
  };
  
  handleMouseEnter() {
    this.setState({hovered: true})
  }
  
  handleMouseLeave() {
    this.setState({hovered: false})
  }
  
  render() {
    let {file, deleteFile, admin} = this.props;
    return (
      <div 
        className={classNames({"diokan-gallery__item-admin": admin, "diokan-gallery__item": !admin})} 
        onMouseEnter={this.handleMouseEnter} 
        onMouseLeave={this.handleMouseLeave}>
        <a href="#">
          <img src={file.imagePreviewUrl} alt="photo" className="img-fluid"/>
        </a>
        {this.state.hovered && 
        (<div className="diokan-gallery__item-hovered">
          <a className="diokan-gallery__item-hovered-view diokan-helper__coming-soon" href="#">View Image</a>
          {deleteFile && (
            <a
              className="diokan-gallery__item-hovered-delete"
              href="#"
              onClick={() => deleteFile(file)}>
              <i className="fa fa-trash-o" />
            </a>
          )}
        </div>)}
      </div>
    )
  }
}

export default GalleryItem;