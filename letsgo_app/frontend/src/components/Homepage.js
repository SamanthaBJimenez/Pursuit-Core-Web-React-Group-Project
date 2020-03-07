import React, { useState, useEffect } from 'react';
import '../CSS/Homepage.css';
import Image from './Image'
import axios from 'axios';



const Homepage = () =>{
    const [ posts, setPosts] = useState([]);

    useEffect(()=>{
        const fetchPosts = async (url) =>{
            try{
                let res = await axios.get(url);
                setPosts(res.data.payload)
            }catch(error){
                setPosts([])
            }
        }

        fetchPosts('http://localhost:3005/posts')

        // const fetchUsers = async (url) =>{
        //     debugger
        //     try{
        //         let res = await axios.get(url);
        //         setUsers(res.data.payload);

        //     }catch(error){
        //         setUsers([])
        //     }
        // }

        // fetchUsers('http://localhost:3005/users')

    }, [])



    const postsDisplay = posts.map(post =>{
        console.log(post.imageURL)
    return <div key={post.id}><Image filePath={post.imageURL}/>,{post.content}</div>

        
    })
    // const usersDisplay = users.map(user =>{
    // return <li key={user.id}>{user.username}</li>
    // })

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