import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TOGGLE, toggle } from '../actions';
import Toggle from './Toggle';


class App extends Component {
	render() {

		const { val } = this.props;
		return (
			<div>
				<Toggle
					onToggle={this.props.handleToggle
					}
					val={val} />
			</div>
		);
	}
}

App.propTypes = {
	val: PropTypes.bool.isRequired
};

function mapStateProps(state) {
	return {
		val: state.toggle.val
	};
}

const mapDispatchProps = (dispatch) => {
	return {
		handleToggle: (value) => { dispatch(toggle(value)) }
	}
};

export default connect(mapStateProps, mapDispatchProps)(App);
