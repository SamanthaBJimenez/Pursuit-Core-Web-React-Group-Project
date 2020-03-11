import React, { useState, useEffect } from 'react';
// import '../css/Homepage.css';
import { NavLink } from 'react-router-dom'
import PostImage from './Image';
import PostTags from './Hashtags'
import UserInfo from './UserInfo'
import axios from 'axios';


const Homepage = () =>{
    const [ posts, setPosts] = useState([]);
    const [ hashtags, setHashtags ] = useState([]);


    
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

    useEffect(()=>{
        const fetchTags = async (url) =>{
            try{
                let tag = await axios.get(url);
                setHashtags(tag.data.payload)
            }catch(error){
                setHashtags([])
            }
        }
        fetchTags(`http://localhost:3005/hashtags/`)
    }, [])


    const allPosts = {};
    let postArr = [];

    posts.forEach(post =>{
        allPosts[post.id] = post
    });

    hashtags.forEach(hashtag =>{
        allPosts[hashtag.post_id]["hash"] = hashtag.array_agg
    });

    for(const el in allPosts){
        console.log(allPosts)
        postArr.push( <PostImage key={allPosts[el]} src= {allPosts[el]["imageurl"]} username={allPosts[el]["username"]} /> )
    }
    
    // const displayAllPosts = allPosts.map(post =>{
    //     debugger
    //     return <PostImage key={post.id} userName={post.username} profilePic={post.profilepic} filePath={post.imageurl} postContent={post.content}/>
    // })



    // const postsDisplay = posts.map(post =>{

    // return <PostImage key={post.id} userName={post.username} profilePic={post.profilepic} filePath={post.imageurl} postContent={post.content}/>
    // })

    // const postTags = hashtags.map(hashtag =>{
    //     return <PostTags key={hashtag.post_id} hashtags={hashtag.array_agg}/>
    // })
    
    


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
                    <UserInfo/>
                    {/* <ul id="hashtags"></ul> */}
                </div>
                <div className="feed split">
                <div>
                    {postArr}
                </div>

                
                </div>
            </div>
        )

}


export default Homepage;