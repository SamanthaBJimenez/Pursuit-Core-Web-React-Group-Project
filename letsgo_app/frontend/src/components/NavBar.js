import React from './node_modules/react';
import '../css/NavBar.css';

class NavBar extends React.Component{
    

    render() {
        return(
            <nav>
                {/* <NavLink exact to={"/LogIn"}>Log In</NavLink>
                <NavLink exact to={"/SignUp"}>Sign Up</NavLink>
                <NavLink exact to={"/Home"}>Home</NavLink>
                <NavLink exact to={"/Upload"}>Upload</NavLink> */}
            </nav>
        )
    }
}

export default NavBar;