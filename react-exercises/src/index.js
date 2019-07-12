import React from 'react'
import ReactDOM from 'react-dom'
import Ex1 from './Ex1'
import Ex2 from './Ex2'
import Ex3 from './Ex3'

const App = () => {
  return (
    <div>
      <Ex1 />
      <Ex2 />
      <Ex3 />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)