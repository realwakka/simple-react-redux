import React, { Component } from 'react'
import PropTypes from 'prop-types';



const Toggle = ({ text, onToggleClick }) => (
	<div>
		<h1 onClick={() => onToggleClick()}>
			{
				text
			}
		</h1>
	</div>
);


Toggle.propTypes = {
	text: PropTypes.string.isRequired,
	onToggleClick: PropTypes.func.isRequired
};

export default Toggle;