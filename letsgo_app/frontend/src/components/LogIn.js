import React from "react";
import axios from "axios";

// import Homepage from "../components/Homepage";
import { useInput } from "../util/useInput";
import { Link, NavLink, Router } from "react-router-dom";
// import { Router } from "react-router-dom";
//import "../css/LogIn.css"
// import videoUrl from '../videoAssets/turkeyMonth.mp4';
// import Background from '../pics/officiallogo.png';

const Login = () => {
  let userNameObj = useInput("");
  let emailObj = useInput("");
  let passwordObj = useInput("");

  const handleVerification = async e => {
    e.preventDefault();
    let inputUserName = userNameObj.value;
    let inputEmail = emailObj.value;
    let inputPassword = passwordObj.value;
    let res = await axios.get(`http://localhost:3005/users/email/${inputEmail}`);
    if (inputEmail === res.data.payload.email || (inputUserName === res.data.payload.username && inputPassword === res.data.payload.password)) {
      sessionStorage.loginedUser = res.data.payload.id;
      setTimeout(function() {
        window.location = "../homepage";
      });
      alert("You were successfully logged in!");
    } else {
      return alert(
        "Credentials not entered or you don't exist. Please head over to our sign up page."
      );

    }


  };

  const backgroundCss = {
    position: "absolute",
    right: "0",
    bottom: "0",
    minWidth: "100%",
    minHeight: "100%"
  };


  console.log(userNameObj, emailObj, passwordObj);
  return (
    <div className="mainDiv">
        <div className="videoBox">
        {/* <video
          autoPlay
          loop
          id="background-video"
          style={{ 
              position: "fixed", 
              width: "100%",
              left: 0,
              top: 0,
              ...backgroundCss }}
        >

          <source src={videoUrl} type="video/mp4" /> */}

          Your browser does not support the video tag.
        </video>
      </div>
      
    <div className="leftDiv"> 
     
      <div className="logoForLogin">

       
        <nav>
          Don't have an account?
          <NavLink className="link" exact to={"/SignUp"}>
            {" "}
            Sign up here.{" "}
          </NavLink>
        </nav> 
       </div>
​
      <div className="logInForm">
      <header> 
    <img src="" alt=""/>
    </header>
    <div className="letsGoDiv"> 
    <h1> Let's Go</h1>
    </div>
    <div className="theWorldDiv"> 
    <h3> [the(world) + (is)waiting]</h3>
    </div>
        <form className="formContainer" onSubmit={handleVerification}>
          <input
            type="text"
            name={"userName"}
            {...userNameObj}
            placeholder="Enter username"
          />
          <input
            type="email"
            name={"email"}
            {...emailObj}
            placeholder="Enter email"
          />
​
          <input className="stylePassword"
            type="password"
            name={"password"}
            pattern=" .{}"
            required
            {...passwordObj}
            placeholder="Enter password"
          />
          <span className="icon"></span>
        </form>
          <button type="submit"> Log In</button>
      </div>
​
​
​
        {/* <Link to="SignUp"> Don't Have An Account?</Link> */}
      </div>
    </div>
  );
};



export default Login;