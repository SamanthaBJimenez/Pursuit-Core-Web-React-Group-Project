
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import axios from "axios"
import '../CSS/Upload.css';

const Upload =()=> {
    const [file, setFile] =useState(null)
  

    const onFormSubmit=(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage',file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        // console.log(formData , config)
        axios.post("/uploadphoto",formData,config)
        .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
        });
    }

    const checkMimeType =(e)=>{
        let files = e.target.files 
        let err = ''
       const types = ['image/png', 'image/jpeg', 'image/gif']
        for(var x = 0; x<files.length; x++) {
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

    const onChange=(e)=> {
        if(checkMimeType(e)){
            setFile(e.target.files[0]);
        }
    }
        return (
            <>
            <nav>
                <form>
                    <input placeholder="Search"></input>
                </form>
                <NavLink exact to={"/homepage"}>Home</NavLink>
                <NavLink exact to={"/signup"}>Log Out</NavLink>
            </nav>
            <form onSubmit={onFormSubmit}>
                <h1>LOGO!</h1>
                <h3>Upload</h3>
                <label>
                    Image
                    <input type="file" name="myImage" onChange={onChange} />
                </label>
                <button type="submit">Upload</button>
            </form>
                <label>
                    Text
                    <input type="text" name="myText" onChange={onChange} />
                </label>
            <button>Post</button>
            </>
        )
}


export default Upload;