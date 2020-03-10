import React from 'react';

const PostImage = ({filePath, userName, profilePic}) => {
    // const { filePath } = props; 
    // const filePath = props.filePath
    const handleStyleProfile ={
        heigh:"70px",
        width:"50px"
       }
    const handleStylePost ={
        heigh:"400px",
        width:"500px"
       }

    return (<div>
     <img alt=' ' src={profilePic} style={handleStyleProfile}/>
     {/* <img alt={userName} src={filePath} style={handleStylePost}/> */}
     <img alt={userName} src="../../assets/uploads/IMAGE-1583815427327.jpg" style={handleStylePost}/>
    </div>)
}


export default PostImage