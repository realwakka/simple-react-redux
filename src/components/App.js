import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TOGGLE, toggle } from '../actions';
import Toggle from './Toggle';
import ToggleContainer from '../containers/ToggleContainer';


class App extends Component {
	render() {
		return (
			<div>
				<ToggleContainer />
			</div>
		);
	}
}


export default App;
