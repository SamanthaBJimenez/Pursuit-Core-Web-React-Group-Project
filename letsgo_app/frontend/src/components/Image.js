import React from "react";

const PostImage = ({ filePath, userName, profilePic, postContent }) => {
  // const { filePath } = props;
  // const filePath = props.filePath
  const handleStyleProfile = {
    heigh: "70px",
    width: "50px"
  };
  const handleStylePost = {
    heigh: "400px",
    width: "500px"
  };

  return (
    <div>
      <h4>{userName}</h4>
      <img alt=" " src={profilePic} style={handleStyleProfile} />

      <img alt={userName} src={filePath} style={handleStylePost} />
      <p>{postContent}</p>
    </div>
  );
};

export default PostImage;
