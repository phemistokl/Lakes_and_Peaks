import React, { Component } from 'react';
import { connect } from 'react-redux';

import { currentPlace, deletePlace, toggleModal } from '../actions';

@connect(undefined, { currentPlace, deletePlace, toggleModal })
export default class Client extends Component {
    constructor(props) {
        super(props);

        this.currentPlace = this.currentPlace.bind(this);
        this.deletePlace = this.deletePlace.bind(this);
    }

    currentPlace() {
        this.props.currentPlace(this.props.id);
    }

    deletePlace() {
        this.props.deletePlace(this.props.id);
    }

    render() {

        const { title, description, videolink, coordX, coordY, phone, email } = this.props;

          return (
            <div>
              <div>{title}</div>
              <div>{description}</div>
              <div>{videolink}</div>
              <div>{coordX}</div>
              <div>{coordY}</div>
              <div>{phone}</div>
              <div>{email}</div>
            </div>
          );
    }
}
