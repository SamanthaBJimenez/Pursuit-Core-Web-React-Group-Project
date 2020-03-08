import React from 'react';

const PostImage = ({filePath, userName, profilePic}) => {
    // const { filePath } = props; 
    // const filePath = props.filePath

    return (<div>
        <img alt='profilePic' src={profilePic}/>
            <p>{userName}</p>
     <img alt='imgPost' src={filePath}/>
    </div>)
}


export default PostImage