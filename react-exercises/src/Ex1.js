import React from 'react'

const getTime = () => {
    return (new Date()).toLocaleTimeString()
}

const Ex1 = () => {
    return (
        <div>
            <div>Current Time</div>
            <h3>{getTime()}</h3>
        </div>
    )
}

export default Ex1