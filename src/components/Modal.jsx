import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addPlace, editPlace, updatePlace, deletePlace, toggleModal } from '../actions';

@connect(mapStateToModalProps, { addPlace, editPlace, updatePlace, deletePlace, toggleModal })
export default class Modal extends Component {
    constructor(props) {
        super(props);

        if (!this.props.newEntry) {
          this.state = ({
            title: props.title,
            description: props.description,
            videolink: props.videolink
          });
        } else {
          this.state = ({
            title: '',
            description: '',
            videolink: ''
          });
        }
    }

    componentDidMount() {
        $('#editCustomer').modal('show');
    }

    closeModal() {
        // need to have component inside different this context
        let modalComponent = this;
        $('#editCustomer').modal('hide');
        // Make sure bootstrap modal close finishes before
        // changing modal isOpen to false otherwise background gets stuck
        $('#editCustomer').on('hidden.bs.modal', function () {
          modalComponent.props.toggleModal();
        });
    }

    // handleDelete() {
    //     if (this.props.id && !this.props.newEntry) {
    //       this.props.deleteCustomer(this.props.id);
    //     }
    //     this.closeModal();
    // }

    handleCreate() {
      const place = {
          title: this.state.title,
          description: this.state.description,
          videolink: this.state.videolink
      };


        if (!this.props.newEntry) {
          this.props.updatePlace(this.props.id, place);
        }
        else {
          this.props.savePlace(place);
        }

      this.closeModal();
      this.props.loadPlaces();
    }

    handleTitleChange(e) {
      e.preventDefault();
      this.setState({
        title: e.target.value
      });
    }

    handleDescriptionChange(e) {
      e.preventDefault();
      this.setState({
        description: e.target.value
      });
    }

    handleVideoChange(e) {
      e.preventDefault();
      this.setState({
        videolink: e.target.value
      });
    }

    render() {
      console.log(this.props.title);
      if (!this.props.isOpen) {
        this.closeModal();
      }
      return <div
        id={"editPlaces"}
        className="modal fade"
        data-backdrop="static"
        tabIndex="-1"
        role="dialog"
          >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  onClick={this.closeModal.bind(this)}
                  type="button" className="close"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                {
                  !this.props.newEntry ?
                  <h4 className="modal-title">Edit Place</h4>
                  : <h4 className="modal-title">Create CPlace</h4>
                }
              </div>
              <div className="modal-body">
                <div className="input-form-group">
                  <label htmlFor="place-title">Place title</label>
                  <input type="text"
                    onChange={this.handleTitleChange.bind(this)}
                    id="place-title"
                    className="form-control"
                    value={this.state.title}
                  />
                </div>

                <div className="input-form-group">
                  <label htmlFor="place-description">Place description</label>
                  <input type="text"
                    onChange={this.handleDescriptionChange.bind(this)}
                    id="place-description"
                    className="form-control"
                    value={this.state.description}
                  />
                </div>
                <div className="input-form-group">
                  <label htmlFor="place-link">Video</label>
                  <input type="text"
                    onChange={this.handleVideoChange.bind(this)}
                    id="place-video"
                    className="form-control"
                    value={this.state.videolink}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default mystyle"
                  onClick={this.closeModal.bind(this)}
                >
                    Cancel
                </button>
                <button
                  onClick={this.handleCreate.bind(this)}
                  type="button"
                  className="btn btn-primary"
                >
                  Save changes
                </button>
                <button
                  onClick={this.handleDelete.bind(this)}
                  type="button"
                  className="btn btn-danger bottom-left"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
      </div>
    }
}

function mapStateToModalProps(state) {
  return {
    id: state.places.place.id,
    title: state.places.place.title,
    description: state.places.place.description,
    videolink: state.places.place.videolink,
    isOpen: state.modal.isOpen,
    newEntry: state.modal.newEntry
  };
}
