import React, { Component } from 'react';
import { connect } from 'react-redux';

import { currentPlace, toggleModal } from '../actions';

@connect(undefined, { currentPlace, toggleModal })
export default class PlaceInMenu extends Component {
    constructor(props) {
        super(props);

        this.currentPlace = this.currentPlace.bind(this);
    }

    currentPlace() {
        this.props.currentPlace(this.props.id);
        this.props.toggleModal();
    }

    render() {

        const { title } = this.props;

          return (
            <div className="circle" onClick={this.currentPlace.bind(this)}>
              <div className="title">{title}</div>
            </div>
          );
    }
}
