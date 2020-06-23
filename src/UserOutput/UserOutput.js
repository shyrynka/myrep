import React from 'react'; 
import './UserOutput.css'

const userOutput = (props) =>{
    return(
        <div className = 'UserOutput'>
            <p>Hello, I'm a User with account: {props.username}</p>
            <p>What is your name:</p>
        </div>
    )
}

export default userOutput;