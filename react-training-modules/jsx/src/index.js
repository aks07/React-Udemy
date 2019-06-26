// import the react and react-dom libraries 
import React from 'react'
import ReactDOM from 'react-dom'
import Ex1 from './Ex1'

// create a react component
const App = () => {
    const buttonText = {text: 'Click Me!'}

    return (
        <div>
            <Ex1 />
            <label className='label' htmlFor='name'> Enter Name: </label>
            <input id="name" type="text" />
            <button style={ { backgroundColor: 'blue', color : 'white'} }>{ buttonText.text }</button>
        </div>
    )
}


// Take the component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)