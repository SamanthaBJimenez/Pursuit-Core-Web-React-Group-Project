import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useInput } from "../util/useInput";
// import "../css/SignUp.css"
import axios from "axios";

const SignUp = () => {
  const username = useInput("");
  const email = useInput("");
  const password = useInput("");
  const bio = useInput("");

  const [file, setFile] = useState("")
  const [image,SetImagePath] = useState("")

  const onUploadImage=async(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('myImage',file);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };

    let res= await axios.post("http://localhost:3000/posts/uploads",formData,config)
    console.log(res.data)
    // debugger
    if(res.data.status==="success"){
        SetImagePath(res.data.payload);
        alert("Image is successfully uploaded")
        setFile("")
    }else{
        alert(`${res.data.status.message}`)
    }

}

const checkMimeType =(e)=>{
    let files = e.target.files 
    let err = ''
   const types = ['image/png', 'image/jpeg', 'image/gif']
    for(let x = 0; x<files.length; x++) {
         if (types.every(type => files[x].type !== type)) {
         err += files[x].type+' is not a supported format\n';
       }
     };
   if (err !== '') { 
        e.target.value = null
        alert(err)
         return false; 
    }
   return true;
  }

const onSelectImage=(e)=> {
    if(checkMimeType(e)){
        setFile(e.target.files[0]);
    }
}

const handleNewUser= async()=>{
  let newUser = await axios.post("http://localhost:3005/users/", {
    username: username.value,
    password: password.value,
    bio: bio.value,
    profilePic: image,
    email: email.value
  });
  
  if(newUser.data.status==="success"){
    sessionStorage.loginedUser=newUser.data.payload.id
    alert("new user created")
    setTimeout(function() {
        window.location = "../homepage";
    },1000) 
  }
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
                <form className="signUpForm" onSubmit={onUploadImage}>
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
                        <input type="file" name="myImage" onChange={onSelectImage} />
                    <button type="submit">Upload</button>
                    </label>
                </form>
                    <button onClick={handleNewUser}><span>Create Account</span></button>
            </div>
        </div>
    )
}



export default SignUp;
