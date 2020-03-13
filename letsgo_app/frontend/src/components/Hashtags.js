import React, { useState, useEffect } from "react";
import axios from "axios";

const Hashtags = ({ postId }) => {
  const [tags, setTags] = useState([]);

  const fetchTags = async (url) => {
      try {
          let res = await axios.get(url);
          setTags(res.data.payload);
        } catch (error) {
            setTags([]);
        }
    };

    useEffect(() => {
        fetchTags(`http://localhost:3005/hashtags/${postId}`)
    }, []);


  const getAllTags = tags.map(tag=>{
  return <p>#{tag.tag_name}</p>
  })
  return (
  <div>{getAllTags}</div>
  )
};
export default Hashtags;

// const
