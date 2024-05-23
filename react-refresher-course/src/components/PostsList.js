import React from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";

const PostsList = ({ posts, onStarClick }) => {
  return (
    <ul className={classes.posts}>
      {posts.map((post, idx) => {
        const { name, greeting, rating } = post;
        return (
          <Post
            name={name}
            greeting={greeting}
            rating={rating}
            key={idx}
            onStarClick={() => {
              onStarClick(idx);
            }}
          />
        );
      })}
    </ul>
  );
};

export default PostsList;
