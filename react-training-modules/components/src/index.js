import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Adi" 
        time="11:30pm"
        comment="Hello from Adi"
      />
      <CommentDetail
        author="Nishu" 
        time="08:00pm"
        comment="Hello from Nishu"
      />
      <CommentDetail
        author="Parul" 
        time="08:30pm"
        comment="Hello from Parul"
      />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)