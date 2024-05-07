import React from "react";
import classes from "./Post.module.css";

const Post = ({ name, greeting }) => {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{name}</p>
      <p className={classes.text}>{greeting}</p>
    </li>
  );
};

export default Post;
