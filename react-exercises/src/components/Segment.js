/*
Card sort of contianer
*/
import React from 'react'

class Segment extends React.Component {
	render() {
		return (
			<div class="ui placeholder segment">
				{this.props.children}
			</div>
		)
	}
}

export default Segment