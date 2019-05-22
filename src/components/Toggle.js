import React, { Component } from 'react'
import PropTypes from 'prop-types';

function get_text(val) {
	if (val == true)
		return 'TRUE';
	else
		return 'FALSE';

}

const Toggle = ({ val, onToggle }) => (
	<div>
		<h1 onClick={(e) => this.props.onToggle()}>
			{
				get_text(val)
			}
		</h1>
	</div>
)


Toggle.propTypes = {
	val: PropTypes.bool.isRequired,
	onToggle: PropTypes.func.isRequired
};

export default Toggle