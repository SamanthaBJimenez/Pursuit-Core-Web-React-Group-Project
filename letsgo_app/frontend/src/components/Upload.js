import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import axios from "axios"
// import '../css/Upload.css';
import { useInput } from '../util/useInput';


const Upload =()=> {
    const [file, setFile] = useState("")
    const [image,SetImagePath] = useState("")

    let contentObj=useInput("")
    let hashtagObj=useInput("")


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
    const handleNewPost= async()=>{
        let newPost = await axios.post(`http://localhost:3005/posts/`,{poster_id:sessionStorage.loginedUser,imageURL:image,content:contentObj.value})
        console.log(newPost.data)
        handleNewHashTag(newPost.data.payload)
    }
    const handleNewHashTag =async(data)=>{
        if(hashtagObj.value){
            let newHashTag = await axios.post(`http://localhost:3005/hashtags/`,{poster_id:data.poster_id,post_id:data.id,tag_name:hashtagObj.value})
            console.log(newHashTag.data)
        }else{
            console.log("No Hash_Tag was added")
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
            <form onSubmit={onUploadImage}>
                <h3>Upload</h3>
                <label>
                    Image
                    <input type="file" name="myImage" onChange={onSelectImage} />
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
            <button onClick={handleNewPost}>Post</button>
            </>
        )
}


export default Upload;