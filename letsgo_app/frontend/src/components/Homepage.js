import React, { useState, useEffect } from 'react';
// import '../css/Homepage.css';
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
            setPosts(res.data.payload)
        }catch(error){
            setPosts([])
        }
    }
    
    useEffect(()=>{
        // fetchData('http://localhost:3005/posts')
    }, [])

    const postsDisplay = posts.map(post =>{
            // return (<><PostImage key={post.id} userName={post.username} profilePic={post.profilepic} filePath={post.imageurl} postContent={post.content}/>
            //         <Hashtags postId={post.id}/>
            //     </>)
        if(sessionStorage.searchTerm){
            fetchData(`http://localhost:3005/posts/hashtag/${sessionStorage.searchTerm}`)
            localStorage.removeItem("searchTerm")
        }else{
            return (<><PostImage key={post.id} userName={post.username} profilePic={post.profilepic} filePath={post.imageurl} postContent={post.content}/>
                    <Hashtags postId={post.id}/>
                </>)
        }
    })



return(
            <div>
                <nav className="navbar">
                    <form className="form">
                       <SearchAutoComplete/>
                    </form>
                    <div className="allLinks">
                        <NavLink className="link" exact to={"/upload"}>Upload</NavLink>
                        <NavLink className="link" exact to={"/signup"}>Log Out</NavLink>
                    </div>
                </nav>
                <div className="userInfo split">
                    <UserInfo/>
                </div>
                <div className="feed split">
                <div>
                </div>
                {postsDisplay}
                </div>
            </div>
        )

}


export default Homepage;