/*
Card sort of contianer
*/
import React from 'react'

const Segment = (props) => {
    return (
      <div class="ui placeholder segment">
        {props.children}
      </div>
    )
}

export default Segment