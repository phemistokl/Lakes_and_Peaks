import React, { Component } from 'react';
import { connect } from 'react-redux';

import PlaceInMenu from './PlaceInMenu.jsx';

@connect(mapStateToProps)
export default class PlacesMenu extends Component {

    render() {
        return (
            <div className="menuItems">
                        {
                        	this.props.places.map(place =>
                        		<PlaceInMenu
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
