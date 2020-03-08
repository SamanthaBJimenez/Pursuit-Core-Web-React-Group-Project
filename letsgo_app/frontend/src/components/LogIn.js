// import React, { Component } from 'react';
import React, { useEffect,useState } from 'react';
import axios from 'axios'
import Homepage from "../components/Homepage"
import { useInput } from '../util/useInput';

const Login =()=> {
let userNameObj = useInput("")
let emailObj = useInput("")
let passwordObj = useInput("")


const handleVerification = async (e) => {
    e.preventDefault() 
    let inputUserName = userNameObj.value
    let inputEmail = emailObj.value
    let inputPassword = passwordObj.value
    let res = await axios.get(`http://localhost:3005/users/email/${inputEmail}`)
    debugger
    if(inputEmail === res.data.payload.email && inputPassword === res.data.payload.password && inputUserName === res.data.payload.username) {
        // return <div> Link to Homepage </div>
        sessionStorage.loginedUser=res.data.payload.id
        setTimeout(function() {
            window.location = "../components/Homepage";
        }) 
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
            <div className="logIn">
                <h1>LOGO!</h1>
                <h3>Log In</h3>


            <form onSubmit={handleVerification}>

                <input type="text" name={"userName"}  {...userNameObj} placeholder="userName" />
    
                <input type="email" name={"email"} {...emailObj}   placeholder="email" />

                <input type="password" name={"password"} {...passwordObj} placeholder="password" />
                <button type="submit"> Log In</button>

            </form>
            {/* <Link to="SignUp.js"> Don't Have An Account?</Link>  */}
            
            </div>

        )
   }
export default Login;