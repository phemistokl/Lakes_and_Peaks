import React, { Component } from 'react';
import { connect } from 'react-redux';

import { currentPlace, toggleModal } from '../actions';

@connect(undefined, { currentPlace, toggleModal })
export default class Place extends Component {
    constructor(props) {
        super(props);

        this.currentPlace = this.currentPlace.bind(this);
    }

    currentPlace() {
        this.props.currentPlace(this.props.id);
        this.props.toggleModal();
    }

    render() {

          const { title, description, videolink, coordX, coordY, phone, email } = this.props;

          const circleStyle = {
            left: `${coordY}px`,
            top: `${coordX}px`
          }

          return (
            <div className="circleInMap" style={circleStyle} onClick={this.currentPlace.bind(this)}>
              <div>{title}</div>
            </div>
          );
    }
}
