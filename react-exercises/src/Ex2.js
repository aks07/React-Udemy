/* 
This exersise is about using props to pass data to components
in order to make them reusable
*/
import React from 'react'
import Exercise from './components/Exercise'

const Ex2 = () => {
  return (
    <Exercise exerciseNumber="2">
      <Card
        header="Changes in Service"
        content="We just updated our privacy policy here to better service our customers"
      />
    </Exercise>

  )
}

const Card = ({ header, content }) => {
  return (
    <div class="ui card">
      <div class="content">
        <div class="header">{header}</div>
      </div>
      <div class="content">
        {content}
      </div>
    </div>
  )
}

export default Ex2