import React, { useState, useEffect } from 'react';
import '../css/Homepage.css';
import { NavLink } from 'react-router-dom'
import PostImage from './Image';
import Hashtags from './Hashtags'
import UserInfo from './UserInfo'
import axios from 'axios';


const Homepage = () =>{
    const [ posts, setPosts] = useState([]);
    // const [ hashtags, setHashtags ] = useState([]);


    
    useEffect(()=>{
        const fetchData = async (url) =>{
            try{
                let res = await axios.get(url);
                setPosts(res.data.payload)
            }catch(error){
                setPosts([])
            }
        }
        
        fetchData('http://localhost:3005/posts')
    }, [])



    // const allPosts = {};
    
    // posts.forEach(post =>{
    //     allPosts[post.id] = post
    // });
    
    // hashtags.forEach(hashtag =>{
    //     allPosts[hashtag.post_id]["hash"] = hashtag.array_agg
    // });
  
    
    
    // const displayAllPosts = allPosts.map(post =>{
    //     debugger
    //     return <PostImage key={post.id} userName={post.username} profilePic={post.profilepic} filePath={post.imageurl} postContent={post.content}/>
    // })



    const postsDisplay = posts.map(post =>{
    return (<><PostImage key={post.id} userName={post.username} profilePic={post.profilepic} filePath={post.imageurl} postContent={post.content}/>
            <Hashtags postId={post.id}/>
        </>)
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
        

                <div className="userInfoContainer">
                <div className="userInfo split">
                    <UserInfo/>
                    </div>
                <div className="feed split">
                    {postsDisplay}
                </div>
                </div>
                </div>
        )

}


export default Homepage;