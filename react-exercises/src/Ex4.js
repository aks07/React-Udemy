/* 
This exercise is about converting a funcitonal component into a class based component
The following is the code : -

const UserForm = () => {
    return (
        <Exercise exerciseNumber="4">
            <form>
                <label>Enter a UserName: </label>
                <input />
            </form>
        </Exercise>

    )
}

*/
import React from 'react'
import Exercise from './components/Exercise'

class UserForm extends React.Component{
    render() {
        return (
            <Exercise exerciseNumber="4">
                <form>
                    <label>Enter a UserName:  </label>
                    <input />
                </form>
            </Exercise>
    
        )
    }
}

export default UserForm;