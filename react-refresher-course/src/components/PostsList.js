import React from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";

const PostsList = ({ posts, onStarClick, fetching }) => {
  return (
    <ul className={classes.posts}>
      {fetching && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
      {!fetching && posts.length === 0 && (
        <div>
          <h1>There are no posts yet!</h1>
          <p>Look back later 😊!</p>
        </div>
      )}
      {!fetching &&
        posts.length > 1 &&
        posts.map((post, idx) => {
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
