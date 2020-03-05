import React from 'react';
import '../CSS/LogIn.css';

class LogIn extends React.Component{
    

    render() {
        return(
            <div class="logIn">
            <nav></nav>
                <h1>LOGO!</h1>
                <h3>Log In</h3>
                <label>
                    Email
                    <input placeholder="JohnDoe@gmail.com"></input>
                </label>
                <label>
                    Password
                    <input placeholder="aBc123!"></input>
                </label>
                <button>Log In</button>
            </div>
        )
    }
}

export default LogIn;