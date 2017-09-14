import React, { Component } from 'react';
import { connect } from 'react-redux';

import Place from './Place.jsx';

@connect(mapStateToProps)
export default class PlacesBox extends Component {

    render() {
        return (
            <div>
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
		places: state.places.places
	};
}
