import React from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";

const PostsList = ({ posts }) => {
  return (
    <ul className={classes.posts}>
      {posts.length === 0 && (
        <div>
          <h1>There are no posts yet!</h1>
          <p>Look back later 😊!</p>
        </div>
      )}
      {posts.length > 1 &&
        posts.map((post, idx) => {
          const { name, greeting, rating, id } = post;
          return (
            <Post
              name={name}
              greeting={greeting}
              rating={rating}
              key={idx}
              id={id}
            />
          );
        })}
    </ul>
  );
};

export default PostsList;
