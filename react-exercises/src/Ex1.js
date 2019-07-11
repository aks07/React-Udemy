import React from 'react'
import Exercise from './components/Exercise'

const getTime = () => {
  return (new Date()).toLocaleTimeString()
}

const Ex1 = () => {
  return (
    <Exercise exerciseNumber="1">
      <div>
        <div>Current Time</div>
        <h3>{getTime()}</h3>
      </div>
    </Exercise>
  )
}

export default Ex1