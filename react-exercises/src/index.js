import React from 'react'
import ReactDOM from 'react-dom'
import Ex1 from './Ex1'
import Ex2 from './Ex2'
import Ex3 from './Ex3'

const App = () => {
    return (
        <div>
            <Ex1 />
            <Ex2 
                header="Changes in Service"
                content="We just updated our privacy policy here to better service our customers"
            />
            <Ex3/>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)