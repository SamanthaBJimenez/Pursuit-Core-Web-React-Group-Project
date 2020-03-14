import React, { useState, useEffect } from 'react';
import '../css/Homepage.css';
import { NavLink } from 'react-router-dom'
import PostImage from './Image';
import Hashtags from './Hashtags'
import UserInfo from './UserInfo'
import SearchAutoComplete from "./SearchAutoComplete"
import axios from 'axios';


const Homepage = () =>{
    const [ posts, setPosts] = useState([]);
    // const [ hashtags, setHashtags ] = useState([]);

    const fetchData = async (url) =>{
        try{
            let res = await axios.get(url);
            // debugger
            setPosts(res.data.payload)
        }catch(error){
            setPosts([])
        }
    }
    
    const searchResult =()=>{
        if(sessionStorage.searchTerm){
            return <button onClick={()=>{sessionStorage.removeItem("searchTerm");window.location.reload()}}>Return to Homepage</button>
        }else{
            return null
        }
    }

    useEffect(()=>{
        if(sessionStorage.searchTerm){
            fetchData(`http://localhost:3005/posts/hashtag/${sessionStorage.searchTerm}`)
            searchResult()
            
        }else{
            fetchData('http://localhost:3005/posts')
        }
    }, [])

    const postsDisplay = posts.map(post =>{
            return (<><PostImage key={post.id} postId={post.id} profilePic={post.profilepic} userName={post.username} filePath={post.imageurl} postContent={post.content}/>
                    <Hashtags postId={post.id} userName={post.username}/>
                </>)
    })

const handleLogOut=()=>{
    console.log("log out")
    sessionStorage.removeItem("loginedUser")
    sessionStorage.removeItem("searchTerm")
}

return(
            <div className='homepage'>
            
                <nav className="navbar">
                    <div className="form">
                       <SearchAutoComplete/>
                    </div>
                    <div className="allLinks">
                        <NavLink className="link" exact to={"/upload"}>Upload</NavLink>
                        <NavLink className="link" onClick={handleLogOut} exact to={"/login"}>Log Out</NavLink>
                    </div>
                </nav>
        

                <div className="userInfoContainer">
                <div className="userInfo split">
                    <UserInfo/>
                    </div>
                <div className="feed split">
                    {searchResult()}
                    {postsDisplay}
                </div>
                </div>
                </div>
        )

}


export default Homepage;