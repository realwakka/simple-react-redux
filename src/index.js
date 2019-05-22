import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';
import toggleApp from './reducers';

let store = createStore(toggleApp);
let rootElement = document.getElementById('root');

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>,rootElement);
