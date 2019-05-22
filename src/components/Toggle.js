import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Toggle extends Component {
	render() {
		return (
			<div>
				<h1 onClick={(e) => this.handleClick(e)}>
					{
						this.get_text()
					}
				</h1>
			</div>
		);
	}

	get_text() {
		if (this.props.val == true)
			return 'TRUE';
		else
			return 'FALSE';
	}

	handleClick(e) {
		this.props.onToggle();

	}
}

Toggle.propTypes = {
	onToggle: PropTypes.func.isRequired
};
