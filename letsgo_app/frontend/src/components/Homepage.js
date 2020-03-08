import React, { useState, useEffect } from 'react';
import '../CSS/Homepage.css';
import PostImage from './Image'
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
    return <div key={post.id}><PostImage filePath={post.imageurl}/>{post.content}</div>
    })


        return(
            <div>
                <h1>Username</h1>
                <h2>Email</h2>
                <p>User Information</p>
            <div>{postsDisplay}</div>
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