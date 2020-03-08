import React from 'react';

const PostImage = ({filePath}) => {
    console.log(filePath)
    return <img alt='imgPost' src={filePath}/>
}
// const Image =({url})=>{
//     // return <img src="../../../backEnd/norway.jpg" alt=" "></img>
//     // return <img src="../../../assets/rwanda.jpg " alt=" "></img>
//     return <img src="../../assets/rwanda.jpg " alt=" "></img>
// }

export default PostImage