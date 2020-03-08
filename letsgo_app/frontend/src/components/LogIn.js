import React from 'react';
import SignUp from './SignUp';
import { NavLink } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import '../CSS/LogIn.css';

class LogIn extends React.Component{
    

    render() {
        return(
            <div className="logIn">
                <nav>
                    <NavLink exact to={"/signup"}>Sign Up</NavLink>
                </nav>
                <h1>LOGO!</h1>
                <h3>Log In page</h3>
                <label>
                    Email
                    <input placeholder="JohnDoe@gmail.com"></input>
                </label>
                <label>
                    Password
                    <input placeholder="aBc123!"></input>
                </label>
                <button>Log In</button>
                <br></br>
                <button>Create New Account</button>
            </div>
        )
    }
}

export default LogIn;