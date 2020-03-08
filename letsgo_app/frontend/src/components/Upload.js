import React, { useState } from 'react'

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
    const onChange=(e)=> {
        setFile(e.target.files[0]);
    }
        return (
            <>
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