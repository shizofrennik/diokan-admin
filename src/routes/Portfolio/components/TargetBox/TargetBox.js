import React from 'react';
import PropTypes from 'prop-types';
import {DropTarget} from 'react-dnd';
import classNames from 'classnames'

const boxTarget = {
  drop(props, monitor) {
    if (props.onDrop) {
      props.onDrop(props, monitor);
    }
  }
};

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
});

class TargetBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleImageChange = this.handleImageChange.bind(this)
  }
  
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    accepts: PropTypes.arrayOf(PropTypes.string).isRequired,
    onDrop: PropTypes.func,
    setFiles: PropTypes.func
  };

  handleImageChange(e) {
    e.preventDefault();

    let files = e.target.files;
    let promiseArr = [];

    for(let file of files) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      promiseArr.push(new Promise((res, rej) => {
        reader.onloadend = () => {
            file.imagePreviewUrl = reader.result;
            res(file)
          }
        }))
      }

    Promise.all(promiseArr).then(droppedFiles => this.props.setFiles(droppedFiles));
  };

  render() {
    const {canDrop, isOver, connectDropTarget} = this.props;
    const isActive = canDrop && isOver;

    return connectDropTarget(
      <div className={classNames('diokan-drag-box', { "diokan-drag-box__drop": isActive })}>
        <div className="diokan-drag-box__default">
          <div className="diokan-drag-box__icon">
            <div className="diokan-icon diokan-icon__upload">
            </div>
          </div>
          <div className="diokan-drag-box__description">
            <div className="diokan-drag-box__note">
              Drag and drop
            </div>
            <div className="diokan-drag-box__note_secondary">
              your file, or &nbsp;
              <input
                type="file"
                onChange={this.handleImageChange}
                name="file"
                multiple
                style={{display: "none"}}
                id="file"/>
              <label
                htmlFor="file"
                className="diokan-account-upload__description">
                browse
              </label>
            </div>
          </div>
        </div>
        <div className="diokan-drag-box__progress">
          <div className="diokan-progress-bar">
            <span className="diokan-progress-bar-fill" style={{width: "70%"}}/>
          </div>
          <div className="diokan-remark">Uploading ID</div>
        </div>
      </div>
    )
  }
}

export default DropTarget(props => props.accepts, boxTarget, collect)(TargetBox)
