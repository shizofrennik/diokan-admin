import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {DragDropContext, DragDropContextProvider} from 'react-dnd';
import HTML5Backend, {NativeTypes} from 'react-dnd-html5-backend';
import TargetBox from '../components/TargetBox';
import GalleryItem from 'components/GalleryItem';
import Notification from 'components/Notification';
import { Modal } from 'react-bootstrap';

class PortfolioContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      droppedFiles: []
    };

    this.handleFileDrop = this.handleFileDrop.bind(this);
    this.setDropedFiles = this.setDropedFiles.bind(this);
    this.deleteFile = this.deleteFile.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({showModal: true});
  }

  closeModal() {
    this.setState({showModal: false});
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
        <a
          className="diokan-notification__link"
          onClick={this.openModal}
          href="#">Submit your portfolio</a> to get started.
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
      <main>
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
        
        <Modal
          show={this.state.showModal}
          onHide={this.closeModal}
          className="diokan-form-action diokan-form-action__submit">
          <Modal.Header className="diokan-form-action__header">
            <Modal.Title className="diokan-title-primary_sub">Submit Portfolio</Modal.Title>
            <button onClick={this.closeModal} className="diokan-btn diokan-btn-close-icon" />
          </Modal.Header>
          <Modal.Body className="diokan-form-action__body">
            <div className="diokan-form-action__description">
              You’ve uploaded 10 photos.<br />
              Please submit your portfolio so your account can be approved.
            </div>
            <div className="diokan-form__description">
              It will only take us 1-2 business days to review,
              and then you can start earning money.
            </div>
            <button className="diokan-btn diokan-btn-primary__big">Submit Portfolio</button>
          </Modal.Body>
        </Modal>
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
