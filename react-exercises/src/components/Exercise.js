/*
This is the container for the excerises
*/
import React from 'react'
import Segment from './Segment'

class Exercise extends React.Component{
    render() {
        return(
            <Segment>
                <h4 class="ui header">Exercise {this.props.exerciseNumber}</h4>
                {this.props.children}
            </Segment>
        )
    }
}

export default Exercise