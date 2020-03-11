// import React, { Component } from 'react';
import React, {  } from 'react';
import axios from 'axios'
import Homepage from "../components/Homepage"
import { useInput } from '../Util/useInput'
import { Link, NavLink } from 'react-router-dom';
import { Router } from 'react-router-dom';
import "../css/LogIn.css"

const Login =()=> {
let userNameObj = useInput("")
let emailObj = useInput("")
let passwordObj = useInput("")


const handleVerification = async (e) => {
    e.preventDefault() 
    let inputUserName = userNameObj.value
    let inputEmail = emailObj.value
    let inputPassword = passwordObj.value
    debugger
    let res = await axios.get(`http://localhost:3005/users/email/${inputEmail}`)
    if(inputEmail === res.data.payload.email && inputPassword === res.data.payload.password && inputUserName === res.data.payload.username) {
        // return <div> Link to Homepage </div>
        sessionStorage.loginedUser=res.data.payload.id
        // setTimeout(function() {
            window.location = "../homepage";
        // }) 
        alert("You were successfully logged in!") 
    }  
    else {
        return (alert("Credentials not entered or you don't exist. Please head over to our sign up page."))
    }
 
}
// const handleChange = (e) => {
    
//     // this.setState({
//     //     [e.target.name]: e.target.value
//     // })
// }   
console.log(userNameObj, emailObj, passwordObj)
          return(
            <div className="loginOfficial">
                <h1>Welcome to Lets Go</h1>
                <h1>LOGO!</h1>
                <h3>Log In</h3>
             <div className="logIn"> 
              <nav> 
              <NavLink className="link" exact to={"/SignUp"}> Sign Up Here </NavLink>
              </nav>


            <form onSubmit={handleVerification}>

                <input type="text" name={"userName"}  {...userNameObj} placeholder="userName" />
    
                <input type="email" name={"email"} {...emailObj}   placeholder="email" />

                <input type="password" name={"password"} {...passwordObj} placeholder="password" />
                <button type="submit"> Log In</button>

            </form>
            <Link to="SignUp"> Don't Have An Account?</Link> 
           
             </div>
        </div>
        )
   }


export default Login;