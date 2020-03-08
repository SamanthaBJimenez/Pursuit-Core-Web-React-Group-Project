import React, { Component } from 'react';
import axios from 'axios'
import Homepage from "../components/Homepage"

export class Login extends Component {

state = {
    userName: "",
    email: "",
    password: "", 
  }

handleVerification = async (e) => {
    e.preventDefault() 
    let inputEmail = this.state.email
    let inputUserName = this.state.userName
    let inputPassword = this.state.password
    // let username = res.data.elements[1].value
    let res = await axios.get(`http://localhost:3005/users/${inputEmail}`)
    debugger
    if(inputEmail === res) {
        
    } else {
        return (alert("Please sign up")
        )
    }
    // if()
    // let  valid = res.data.elements
    // let {userName} 
 
}

handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

    
    componentDidMount = () => {
        
      }


      render() {
          console.log(this.state)
          
          return(
            
        
        // console.log(userName, email, password)
            <div className="logIn">
                <h1>LOGO!</h1>
                <h3>Log In</h3>

            <form onSubmit={this.handleVerification}>

                <input type="text" name="userName" value={this.userName} onChange={this.handleChange} placeholder="userName"/>
        

                <input type="text" name="email" value={this.email}  onChange={this.handleChange}   placeholder="email"/>



                <input type="text" name="password" value={this.password}  onChange={this.handleChange} placeholder="password"/>


                <button type="submit"> Log In</button>
            </form>
            {/* <Link to="SignUp.js"> Don't Have An Account?</Link>  */}
            </div>

        )
   }
}


export default Login;