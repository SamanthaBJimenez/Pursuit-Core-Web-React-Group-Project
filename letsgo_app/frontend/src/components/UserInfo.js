import React, { useState, useEffect } from 'react'
import PostImage from './Image'
import axios from "axios"

const  UserInfo =()=> {
    let [user,setUser] = useState([])
    

    useEffect(()=>{
        const getUserInfo = async(url)=>{
            try {
                let res= await axios.get(url)
                setUser(res.data.payload)
            } catch (error) {
                setUser([])
            }
        }
        getUserInfo(`http://localhost:3005/users/${1}`)

    }, [])
    
    const handleStyle ={
     heigh:"400px",
     width:"350px"
    }

    const displayUser = () =>{
        return <div className="loggedUser" style={handleStyle}><h2>{user.username}</h2><h3>{user.email}</h3><PostImage key={user.id} filePath={user.profilepic}/></div> 
    }
        return (
            <div>
            {displayUser()}
            </div>
        )
    }

export default UserInfo
