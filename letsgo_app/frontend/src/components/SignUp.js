import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useInput } from '../util/useInput';
import "../css/SignUp.css"
import axios from "axios"

const SignUp =()=> {
    const username = useInput("")
    const email = useInput("")
    const password = useInput("")
    const bio = useInput("")
    const profilePic = useInput("")

    const [file, setFile] = useState(null)
    
    const handleSumbit=async(e)=> {
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage', file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        try{
            await axios.post("http://localhost:3005/users/", {username: username.value, password: password.value, bio: bio.value, profilePic: profilePic.value, email: email.value});
        
            axios.post("/uploadphoto", formData, config).then((response) => {
                debugger;
                alert("The file is successfully uploaded");
                }).catch((error) => {
            });
        }catch(error){
            console.log(error);
        }
    }
    const onChange=(e)=> {
        setFile(e.target.files[0]);
    }
    return(
        <div className="signUp">
            <nav>
                Already have an account?
                <NavLink className="link" exact to={"/login"}>Log In Here</NavLink>
            </nav>
            <div className="mainPage">
                <img className="logo" src="../../assets/test2.png" alt="logo" width="90%" align="left" />
                <p>Let's Go!</p>
                <h1>Sign Up</h1>
                <br/>
                <form className="signUpForm" onSubmit={handleSumbit}>
                    <label>
                        Username
                        <input type="text" placeholder="JohnDoe" {...username} />
                    </label>
                    <label>
                        Email
                        <input type="email" placeholder="JohnDoe@gmail.com" {...email} />
                    </label>
                    <label>
                        Password
                        <input type="password" placeholder="aBc123!" {...password} />
                    </label>
                    <label>
                        Bio
                        <input type="text" placeholder="Bio" {...bio} />
                    </label>
                    <label>
                        Profile Picture
                        <input type="file" name="myImage" onChange={onChange} />
                    </label>
                    <button type="submit"><span>Create Account</span></button>
                </form>
            </div>
        </div>
    )
}

export default SignUp;