import React from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";

const PostsList = ({ posts }) => {
  return (
    <ul className={classes.posts}>
      {posts.map((post, idx) => {
        const { name, greeting } = post;
        return <Post name={name} greeting={greeting} key={idx} />;
      })}
    </ul>
  );
};

export default PostsList;
