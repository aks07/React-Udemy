import React from 'react'
import ReactDOM from 'react-dom'
import Ex1 from './Ex1'

const App = () => {
    return (
        <div>
            <Ex1 />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)