import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import PlacesApp from './components/PlacesApp.jsx';

import store from './store';

ReactDOM.render(
	<Provider store={store}>
    	<PlacesApp />
    </Provider>,
    document.getElementById('root')
);
