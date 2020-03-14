import React, { useState, useEffect } from "react";
import axios from "axios";

const Likes = ({ postId }) => {

    const [likes, setLikes] = useState([]);
    const [likesArr, setLikesArr] = useState(null)

    const fetchLikes = async (url) => {
      try {
          let res = await axios.get(url);
          setLikes(res.data.payload.length);
          setLikesArr(res.data.payload)
        } catch (error) {
            setLikes([]);
        }
    };

    const likeButton = async (e) => {
        if(e.target.innerText === "Like") {
            e.target.innerText = "Unlike";
            try {
               let res= await axios.post(`http://localhost:3005/likes/${sessionStorage.loginedUser}/${postId}`);
               fetchLikes(`http://localhost:3005/likes/${res.data.payload.post_id}`)
            } catch (err) {
              console.log(err);
            }
        } else {
            e.target.innerText = "Like";
            try {
                let res=await axios.delete(`http://localhost:3005/likes/${sessionStorage.loginedUser}/${postId}`);
                fetchLikes(`http://localhost:3005/likes/${res.data.payload.post_id}`)
            } catch (err) {
                console.log(err);
            }
        }
    }

    useEffect(() => {
        fetchLikes(`http://localhost:3005/likes/${postId}`)
    }, []);

    const hasLiked = (arr) => {
        return arr.every(ele => {
            return ele.liker_id !== sessionStorage.loginedUser
        })
    }

    return (
        <div className="likes">
            {   
                likesArr ?
                    hasLiked(likesArr) ?
                        <button onClick={likeButton}>Like</button>
                    :
                        <button onClick={likeButton}>Unlike</button>
                : null
            }
            <p>{likes}</p>
        </div>
    )
};

export default Likes;