/*
This Exersise is about the sending components as props(Children)
to a container component
*/
import React from 'react'
import Segment from './components/Segment'
import Exercise from './components/Exercise'

const Upload = () => {
  return (
    <div>
      <Segment>
        <div class="ui icon header">
          <i class="pdf file outline icon"></i>
          No documents are listed for this customer.
        </div>
        <div class="ui primary button">Add Document</div>
      </Segment>
    </div>
  )
}

const Information = () => {
  return (
    <Segment>
      <h4 class="ui header">For Your Information</h4>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero 
        sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
      </p>
    </Segment>
  )
}

const Ex3 = () => {
  return (
    <Exercise exerciseNumber="3">
      <Upload />
      <Information />
    </Exercise>

  )
}

export default Ex3