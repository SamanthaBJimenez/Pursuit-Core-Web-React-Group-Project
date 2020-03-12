import React, { useState, useEffect } from "react";
import axios from "axios";

const Hashtags = ({ postId }) => {
  const [tags, setTags] = useState([]);

  const fetchTags = async url => {
    try {
      let res = await axios.get(url);
      setTags(res.data.payload);
    } catch (error) {
      setTags([]);
    }
  };

  useEffect(() => {
    fetchTags(`http://localhost:3005/hashtags/${postId}`);
  }, [tags]);

  const getAllTags = tags.map(tag => {
    let tagAryy = [];

    tagAryy.push(tag.tag_name);

    return <p className="singleTag">#{tagAryy } </p>;
  });
  return <div className="hashtags">{getAllTags}</div>;
};
export default Hashtags;

// const
