import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Adi"
          time="Today at 11:30pm"
          avatar={faker.image.avatar()}
          comment="Nice Blog"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Nishu"
          time="Yesterday at 08:00pm"
          avatar={faker.image.avatar()}
          comment="Very Informative"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Parul"
          time="Today at 08:30pm"
          avatar={faker.image.avatar()}
          comment="You're great"
        />
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)