
import React from 'react';
import SignUp from './SignUp';
import LogIn from './LogIn';
import { NavLink, Route, Switch } from 'react-router-dom';
// import '../css/NavBar.css';


class NavBar extends React.Component{
    

    render() {
        return(
            <>
            <nav>
                <NavLink exact to={"/signup"}>Sign Up</NavLink>
                <NavLink exact to={"/login"}>Log In</NavLink>
                <NavLink exact to={"/homepage"}>Home</NavLink>
                <NavLink exact to={"/upload"}>Upload</NavLink>
            </nav>
            </>
        )
    }
}

export default NavBar;