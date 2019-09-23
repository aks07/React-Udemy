/*
This exercise is about how to use state to re-render or updating a particular component.
*/
import React from 'react'
import Exercise from './components/Exercise'

class Clock extends React.Component {
    state = { time: new Date().toLocaleTimeString() }

    componentDidMount() {
        setInterval(() => {
            this.setState({ time: new Date().toLocaleTimeString() })
        }, 1000)
    }

    render() {
        return (
            <Exercise exerciseNumber="5">
                <div className="time">
                    The time is : {this.state.time}
                </div>
            </Exercise>
        )
    }
}

export default Clock;