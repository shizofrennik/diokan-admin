import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {DragDropContext, DragDropContextProvider} from 'react-dnd';
import HTML5Backend, {NativeTypes} from 'react-dnd-html5-backend';
import TargetBox from '../components/TargetBox';
import GalleryItem from 'components/GalleryItem';
import Notification from 'components/Notification';

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

  getNotification() {
    const {droppedFiles} = this.state;
    let description = (droppedFiles.length < 10) ?
      (<span>
        Start earning money for your photos! &nbsp;
        <Link
          to="portfolio"
          className="diokan-notification__link">
          Upload {10 - droppedFiles.length} more portfolio photos
        </Link>
        &nbsp; to get started.
      </span>) :
      (<span>
        <a className="diokan-notification__link" href="#">Submit your portfolio</a> to get started.
      </span>);
    return (
      <Notification>
        {description}
      </Notification>
    )
  }
  
  getImages(files) {
    return files.map((file, index) => <GalleryItem deleteFile={this.deleteFile} file={file} key={index} />);
  }

  render() {
    const {FILE} = NativeTypes;
    const {droppedFiles} = this.state;

    return (
      <main className="diokan-main">
        {this.getNotification()}
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
