import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import axios from "axios"
import '../css/Upload.css';
import { useInput } from '../util/useInput';


const Upload =()=> {
    const [file, setFile] = useState("")
    let contentObj=useInput("")
    let hashtagObj=useInput("")


    const onFormSubmit=async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage',file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        // console.log(formData , config)
        let res= await axios.post("http://localhost:3000/posts/uploads",formData,config)
        console.log(res.data)
        // .then((response) => {
        //         alert("The file is successfully uploaded");
        //     }).catch((error) => {
        // });
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

    const onUpload=(e)=> {
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
                <NavLink exact to={"/login"}>Log Out</NavLink>
            </nav>
            <form onSubmit={onFormSubmit}>
                <h3>Upload</h3>
                <label>
                    Image
                    <input type="file" name="myImage" onChange={onUpload} />
                </label>
                <button type="submit">Upload</button>
            </form>
                <label>
                    Post Content
                    <input type="text" placeholder="whats in your mind?" name="content" {...contentObj}/>
                </label>
                <label>
                    Create hashtag #
                    <input type="text" placeholder="hash tag ##" name="hashtag" {...hashtagObj} />
                </label>
            <button>Post</button>
            </>
        )
}


export default Upload;