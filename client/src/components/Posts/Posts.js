import React from "react";
import "./posts.css"
import Post from "./Post/Post";

const Posts = () => {
  return (
    <div className="posts">
      <h1 className="posts-header">Posts</h1>
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
