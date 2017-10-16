import React, { Component } from 'react';

import PlacesMenu from './PlacesMenu.jsx';
import PlacesBox from './PlacesBox.jsx';

export default class PlacesApp extends Component {
    render() {
        return (
              <div>
                  <PlacesBox />
                  <PlacesMenu />
              </div>
        );
    }
}
