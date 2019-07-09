import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail
        author="Adi" 
        time="Today at 11:30pm"
        avatar= {faker.image.avatar()}
        comment="Nice Blog"
      />
      <CommentDetail
        author="Nishu" 
        time="Yesterday at 08:00pm"
        avatar= {faker.image.avatar()}
        comment="Very Informative"
      />
      <CommentDetail
        author="Parul" 
        time="Today at 08:30pm"
        avatar= {faker.image.avatar()}
        comment="You're great"
      />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)