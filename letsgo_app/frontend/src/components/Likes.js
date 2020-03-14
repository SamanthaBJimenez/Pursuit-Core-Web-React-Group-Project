import React, { useState, useEffect } from "react";
import axios from "axios";

const Likes = ({postId}) => {

    const [likes, setLikes] = useState([]);

    const fetchLikes = async (url) => {
      try {
          let res = await axios.get(url);
          debugger;
          setLikes(res.data.payload);
        } catch (error) {
            setLikes([]);
        }
    };

    // const addLike = async (url) => {
    //     try {
    //         let res = await axios.post(url);
    //         setLikes(res.data.payload);
    //       } catch (error) {
    //           setLikes([]);
    //       }
    // };

    // const deleteLike = async (url) => {
    //     try {
    //         let res = await axios.delete(url);
    //         setLikes(res.data.payload);
    //       } catch (error) {
    //           setLikes([]);
    //       }
    // };

    useEffect(() => {
        fetchLikes(`http://localhost:3005/likes/${postId}`)
    }, []);

    // useEffect(() => {
    //     addLike(`http://localhost:3005/likes/${poster_id}/${post_id}`)
    // }, [likes]);

    // useEffect(() => {
    //     deleteLike(`http://localhost:3005/likes/${poster_id}/${post_id}`)
    // }, [likes]);

  
};

export default Likes;