import React, { useState, useEffect } from 'react'
import axios from "axios"

const  UserInfo =()=> {
    let [user,setUser] = useState([])
    

    useEffect(()=>{
        const getUserInfo = async(url)=>{
            try {
                let res= await axios.get(url)
                // debugger
                setUser(res.data.payload)
            } catch (error) {
                setUser([])
            }
        }
        getUserInfo(`http://localhost:3005/users/${sessionStorage.loginedUser}`)

    }, [])
    
    const handleStyle ={
     heigh:"100px",
     width:"50px"
    }

    const displayUser = () =>{
        return <div className="loggedUser" style={handleStyle}><h2>{user.username}</h2><h5>{user.email}</h5><img src={user.profilepic}></img></div> 
    }
        return (
            <div>
            {displayUser()}
            </div>
        )
    }

export default UserInfo
