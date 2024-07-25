import React, { useMemo, useState } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";

const PostsList = ({ posts }) => {
  let [selectedName, setSelectedName] = useState("null");
  let filteredPosts = useMemo(() => {
    if (selectedName === "null") {
      return posts;
    }
    return posts.filter((post) => post.name === selectedName);
  }, [posts, selectedName]);

  return (
    <>
      <div class={classes.selector}>
        <select
          onChange={(evt) => {
            setSelectedName(evt.target.value);
          }}
        >
          <option value="null">All</option>
          {posts.map((nag) => {
            return (
              <option value={nag.name} key={nag.name}>
                {nag.name}
              </option>
            );
          })}
        </select>
      </div>
      <ul className={classes.posts}>
        {filteredPosts.length === 0 && (
          <div>
            <h1>There are no posts yet!</h1>
            <p>Look back later 😊!</p>
          </div>
        )}
        {filteredPosts.length >= 1 &&
          filteredPosts.map((post, idx) => {
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
    </>
  );
};

export default PostsList;
