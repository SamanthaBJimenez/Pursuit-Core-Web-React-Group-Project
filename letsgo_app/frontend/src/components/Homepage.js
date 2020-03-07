import React from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/Homepage.css';

class Homepage extends React.Component{
    

    render() {
        return(
            <div>
                <nav className="navbar">
                    <form className="form">
                        <input placeholder="Search"></input>
                    </form>
                    <div className="allLinks">
                        <NavLink className="link" exact to={"/upload"}>Upload</NavLink>
                        <NavLink className="link" exact to={"/signup"}>Log Out</NavLink>
                    </div>
                </nav>
                <div className="userInfo split">
                    <h1>Username</h1>
                    <h2>Email</h2>
                    {/* <image></image> */}
                    <p>UserInformation</p>
                    <ul id="hashtags"></ul>
                </div>
                <div className="feed split">

                </div>
            </div>
        )
    }
}

export default Homepage;