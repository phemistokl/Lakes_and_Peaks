import React, { Component } from 'react';
import { connect } from 'react-redux';

import Place from './Place.jsx';
import Modal from './Modal.jsx';

import { updatePlace, createPlace, toggleModal } from '../actions';

@connect(mapStateToProps, { updatePlace, createPlace, toggleModal })
export default class PlacesBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            places: []
        };

        this.createPlace = this.createPlace.bind(this);
    }

    createPlace() {
        this.props.createPlace();
        this.props.toggleModal();
        console.log(this.props.isOpen);
    }

    render() {
        return (

            <div>
              { this.props.isOpen ? <Modal /> : null }
              <div className="addPlace" onClick={this.createPlace}>Add Place</div>
                        {
                        	this.props.places.map(place =>
                        		<Place
                        			key={place.id}
                        			id={place.id}
                        			title={place.title}
                        			description={place.description}
                        			videolink={place.videolink}
                              coordX={place.coordX}
                        			coordY={place.coordY}
                        			phone={place.phone}
                        			email={place.email}
                        	   />
                        	)
                        }
             </div>
        );
    }
}

function mapStateToProps(state) {
	return {
		places: state.places.places,
    isOpen: state.modal.isOpen
	};
}
