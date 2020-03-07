import React from 'react';
import '../css/Homepage.css';

class Homepage extends React.Component{
    

    render() {
        return(
            <div>
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