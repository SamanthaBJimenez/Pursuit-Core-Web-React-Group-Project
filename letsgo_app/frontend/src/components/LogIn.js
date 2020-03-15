import React from 'react';
import axios from 'axios'
import { NavLink } from "react-router-dom";
import "../css/LogIn.css"
// import videoUrl from '../videoAssets/turkeyMonth.mp4';
import { useInput } from '../util/useInput';


const Login =()=> {

let emailObj = useInput("")
let passwordObj = useInput("")

const handleVerification = async (e) => {
    e.preventDefault() 
    let inputEmail = emailObj.value
    let inputPassword = passwordObj.value
    let res = await axios.get(`http://localhost:3005/users/email/${inputEmail}`)
    if(inputEmail === res.data.payload.email && inputPassword === res.data.payload.password) {
        sessionStorage.loginedUser=res.data.payload.id
        setTimeout(function() {
            window.location = "../homepage";
        }) 
        alert("You were successfully logged in!") 
    }  
    else {
        return (alert("Credentials not entered or you don't exist. Please head over to our sign up page."))
    }
 
}

const backgroundCss = {
  position: "absolute",
  right: "0",
  bottom: "0",
  minWidth: "100%",
  minHeight: "100%"
};

console.log(emailObj, passwordObj)
          return(
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

                  <source src={videoUrl} type="video/mp4" />

                  Your browser does not support the video tag.
                </video> */}
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

            <form onSubmit={handleVerification}>
                <label>E-Mail</label>
                <br></br>
                <input type="email" name={"email"} {...emailObj}   placeholder="email" />
                <br></br>
                <label>Password</label>
                <br></br>
                <input type="password" name={"password"} {...passwordObj} placeholder="password" />
                <br></br>
                <br></br>
                <button type="submit"> Log In</button>
            </form>
      </div>
      </div>
    </div>
    )
   }
export default Login;