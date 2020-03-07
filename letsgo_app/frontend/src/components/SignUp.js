import React from 'react';
import LogIn from './LogIn';
import { NavLink } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import '../CSS/SignUp.css';

class SignUp extends React.Component{
    
    render() {
        return(
            <div className="signUp">
                <nav>
                    <NavLink exact to={"/login"}>Log In</NavLink>
                </nav>
                <h1>LOGO!</h1>
                <h3>Sign Up</h3>
                <label>
                    Username
                    <input placeholder="JohnDoe"></input>
                </label>
                <label>
                    Email
                    <input placeholder="JohnDoe@gmail.com"></input>
                </label>
                <label>
                    Password
                    <input placeholder="aBc123!"></input>
                </label>
                <button>Create Account</button>
            </div>
        )
    }
}

export default SignUp;
