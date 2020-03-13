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
            // debugger
            setPosts(res.data.payload)
        }catch(error){
            setPosts([])
        }
    }
    
    const searchResult =()=>{
        return console.log("hello")
        // return <><h1>Return todjkshkfjhdskjhfkdslhfkldshkfhsdlkhfljkshflkhslkhlkdsfh Home</h1></>
        // debugger
        // if(!sessionStorage.searchTerm){
        //     return null
        // }{
        //     return <><h1>Return to Home</h1></>
        // }
    }

    useEffect(()=>{
        // searchResult
        if(sessionStorage.searchTerm){
            fetchData(`http://localhost:3005/posts/hashtag/${sessionStorage.searchTerm}`)
            sessionStorage.removeItem("searchTerm")
        }else{
            fetchData('http://localhost:3005/posts')
        }
    }, [])

    const postsDisplay = posts.map(post =>{
            return (<><PostImage key={post.id} userName={post.username} profilePic={post.profilepic} filePath={post.imageurl} postContent={post.content}/>
                    <Hashtags postId={post.id}/>
                </>)
    })

const handleLogOut=()=>{
    console.log("log out")
    sessionStorage.removeItem("loginedUser")
    sessionStorage.removeItem("searchTerm")
}

return(
            <div>
                <nav className="navbar">
                    <div className="form">
                       <SearchAutoComplete/>
                    </div>
                    <div className="allLinks">
                        <NavLink className="link" exact to={"/upload"}>Upload</NavLink>
                        <NavLink className="link" onClick={handleLogOut} exact to={"/login"}>Log Out</NavLink>
                    </div>
                </nav>
                <div className="userInfo split">
                    <UserInfo/>
                </div>
                <div className="feed split">
                <div>
                </div>
                {searchResult}
                {postsDisplay}
                </div>
            </div>
        )

}


export default Homepage;