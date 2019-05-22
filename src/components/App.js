import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TOGGLE, toggle } from '../actions';
import Toggle from './Toggle';


class App extends Component {
	render() {

		const { dispatch, val } = this.props;
		return (
			<div>
				<Toggle
					onToggle={
						val => dispatch(toggle(val))
					}
					val={val} />
			</div>
		);
	}
}

App.propTypes = {
	val: PropTypes.bool.isRequired
};

function select(state) {
	return {
		val: state.toggle.val
	};
}

const mapDispatchProps = (dispatch) => {
	return {
		handleToggle: (value) => { dispatch(actions.toggle(value)) }
	}
};

export default connect(select)(App);
