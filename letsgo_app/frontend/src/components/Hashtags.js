import React from 'react';

const PostTags = ({hashtags}) =>{
    const hashtagsArr = hashtags.map(hashtag =>{
         return "#" + hashtag + " "
    })
    return(
        <p>{hashtagsArr}</p>
        )
}
//map
export default PostTags