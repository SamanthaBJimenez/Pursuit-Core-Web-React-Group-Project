import React, { useState, useEffect } from 'react'
import axios from "axios"

const  UserInfo =()=> {
    let [user,setUser] = useState([])
    let [showUpload,setUpload]=useState(false)
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
        // console.log(res.data)
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

    useEffect(()=>{
        const getUserInfo = async(url)=>{
            try {
                let res= await axios.get(url)
                setUser(res.data.payload)
            } catch (error) {
                setUser([])
            }
        }
        getUserInfo(`http://localhost:3005/users/${sessionStorage.loginedUser}`)

    }, [])

    const uploadProfileImg=()=>{
        setUpload(!showUpload)
    }

    const handleUpdateProfile= async()=>{
        console.log(image)
        let newPost = await axios.patch(`http://localhost:3005/users/${sessionStorage.loginedUser}`,{profilePic:image})
        if(newPost.data.status==="success"){
            alert("User Profile has updated")
        }
    }

    const uploadForm=()=>{
       return (<>
       <form onSubmit={onUploadImage}>
                <input type="file" name="myImage" onChange={onSelectImage} />
                <button type="submit">Upload Profile</button>
                </form>
                <button onClick={handleUpdateProfile}>Save Profile</button>
                </>)
    }
  
    const displayUser = () =>{
    
        return (
        <div className="loggedUser">
        <h2>{user.username}</h2>
        <h5>{user.email}</h5>
        <img src={user.profilepic} alt="User Profile"></img>
        <br></br>
        <button onClick={()=>uploadProfileImg()}>Upload Profile Pic</button>
        <br></br>
        <p>{user.bio}</p>
        {showUpload?(uploadForm()):null}
        </div> 
    )}
        return (
            <div>
            {displayUser()}
            </div>
        )
    }

export default UserInfo
