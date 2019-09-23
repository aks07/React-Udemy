import React from 'react'
import ReactDOM from 'react-dom'
import Ex1 from './Ex1'
import Ex2 from './Ex2'
import Ex3 from './Ex3'
import Ex4 from './Ex4'
import Ex5 from './Ex5'

const App = () => {
  return (
    <div>
      <Ex1 />
      <Ex2 />
      <Ex3 />
      <Ex4 />
      <Ex5 />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)