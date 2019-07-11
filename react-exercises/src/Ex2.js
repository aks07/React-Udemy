/* 
This exersise is about using props to pass data to components
in order to make them reusable
*/
import React from 'react'
import Exercise from './components/Exercise'

const Ex2 = ({ header, content }) => {
	return (
		<Exercise exerciseNumber="2">
			<div class="ui card">
				<div class="content">
					<div class="header">{header}</div>
				</div>
				<div class="content">
					{content}
				</div>
			</div>
		</Exercise>

	)
}

export default Ex2