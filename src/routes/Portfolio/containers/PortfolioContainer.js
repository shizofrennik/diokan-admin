import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {DragDropContext, DragDropContextProvider} from 'react-dnd';
import HTML5Backend, {NativeTypes} from 'react-dnd-html5-backend';
import TargetBox from '../components/TargetBox';
import GalleryItem from 'components/GalleryItem';

class PortfolioContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      droppedFiles: []
    };

    this.handleFileDrop = this.handleFileDrop.bind(this);
    this.setDropedFiles = this.setDropedFiles.bind(this);
    this.deleteFile = this.deleteFile.bind(this);
  }

  deleteFile(file) {
    let droppedFiles = this.state.droppedFiles.filter(item => {
      return item.name !== file.name
    });
    this.setState({droppedFiles});
  }
  
  setDropedFiles(files) {
    let droppedFiles = [...this.state.droppedFiles, ...files];
    this.setState({droppedFiles});
  }
  
  handleFileDrop(item, monitor) {
    if (monitor) {
      const droppedFiles = monitor.getItem().files;
      let promiseArr = [];

      for(let file of droppedFiles) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        promiseArr.push(new Promise((res, rej) => {
          reader.onloadend = () => {
            file.imagePreviewUrl = reader.result;
            res(file)
          }
        }))
      }
      
      Promise.all(promiseArr).then(droppedFiles => this.setDropedFiles(droppedFiles));
    }
  }
  
  getImages(files) {
    return files.map((file, index) => <GalleryItem deleteFile={this.deleteFile} file={file} key={index} />);
  }

  render() {
    const {FILE} = NativeTypes;
    const {droppedFiles} = this.state;

    return (
      <main className="diokan-main">
        <div className="diokan-notification">
          <div className="diokan-notification__description">
            Start earning money for your photos! &nbsp;
            <Link to="portfolio" className="diokan-notification__link">Upload 10 portfolio photos</Link>
            &nbsp; to get started.
          </div>
          <div className="diokan-notification__action">
            <button className="diokan-btn diokan-btn-close">
              <i className="fa fa-times" aria-hidden="true"/>
            </button>
          </div>
        </div>
        <div className="diokan-main-inner diokan-main-inner__portfolio">
          <div className="diokan-gallery">
            <div className="diokan-gallery__item">
              <DragDropContextProvider backend={HTML5Backend}>
                  <TargetBox 
                    accepts={[FILE]}
                    setFiles={this.setDropedFiles}
                    onDrop={this.handleFileDrop}/>
              </DragDropContextProvider>
            </div>
            {this.getImages(droppedFiles)}
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

export default connect(mapStateToProps, mapDispatchToProps)(DragDropContext(HTML5Backend)(PortfolioContainer))
