/*
This is the container for the excerises
*/
import React from 'react'
import Segment from './Segment'

const Exercise = (props) => {
    return (
      <Segment>
        <h4 class="ui header">Exercise {props.exerciseNumber}</h4>
        {props.children}
      </Segment>
    )
}

export default Exercise