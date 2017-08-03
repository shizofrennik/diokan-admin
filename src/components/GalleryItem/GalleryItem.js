import React from 'react';
import PropTypes from 'prop-types';

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
    deleteFile: PropTypes.func
  };
  
  handleMouseEnter() {
    this.setState({hovered: true})
  }
  
  handleMouseLeave() {
    this.setState({hovered: false})
  }
  
  render() {
    let {file, deleteFile} = this.props;
    return (
      <div 
        className="diokan-gallery__item" 
        onMouseEnter={this.handleMouseEnter} 
        onMouseLeave={this.handleMouseLeave}>
        <a href="#">
          <img src={file.imagePreviewUrl} alt={file.name} className="img-fluid"/>
        </a>
        {this.state.hovered && 
        (<div className="diokan-gallery__item-hovered">
          <a className="diokan-gallery__item-hovered-view" href="#">View Image</a>
          <a className="diokan-gallery__item-hovered-delete" href="#" onClick={() => deleteFile(file)}>x</a>
        </div>)}
      </div>
    )
  }
}

export default GalleryItem;