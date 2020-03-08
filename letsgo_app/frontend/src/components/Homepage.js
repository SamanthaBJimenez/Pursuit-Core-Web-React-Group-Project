

import React, { useState, useEffect } from 'react';
// import '../CSS/Homepage.css';
import { NavLink } from 'react-router-dom'
import PostImage from './Image';

// import {useHttp} from '../Util/CustomHooks'
import axios from 'axios';




const Homepage = () =>{
    const [ posts, setPosts] = useState([]);


    useEffect(()=>{
        const fetchData = async (url) =>{
            try{
                let res = await axios.get(url);
                setPosts(res.data.payload)
            }catch(error){
                setPosts([])
            }
        }
        fetchData('http://localhost:3005/posts');
    }, [])




    const postsDisplay = posts.map(post =>{
        // debugger
        console.log(post)
    return <PostImage key={post.id} userName={post.username} profilePic={post.profilepic} filePath={post.imageurl} />
    })
        
return(
            <div>
                <nav className="navbar">
                    <form className="form">
                        <input placeholder="Search"></input>
                    </form>
                    <div className="allLinks">
                        <NavLink className="link" exact to={"/upload"}>Upload</NavLink>
                        <NavLink className="link" exact to={"/signup"}>Log Out</NavLink>
                    </div>
                </nav>
                <div className="userInfo split">
                    <h1>Username</h1>
                    <h2>Email</h2>
                    {/* <image></image> */}
                    <p>UserInformation</p>
                    <ul id="hashtags"></ul>
                </div>
                <div className="feed split">
                    <div>{postsDisplay}</div>
                </div>
            </div>
        )

}

// class Homepage extends React.Component{
//     render() {
//         return(
            // <div>
            //     <div className="userInfo split">
            //         <h1>Username</h1>
            //         <h2>Email</h2>
            //         {/* <image></image> */}
            //         <p>UserInformation</p>
            //         <ul id="hashtags"></ul>
            //     </div>
            //     <div className="feed split">

            //     </div>
            // </div>
//         )
//     }
// }

export default Homepage;