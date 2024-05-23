import React from "react";
import classes from "./Post.module.css";

const Post = ({ name, greeting, rating, onStarClick }) => {
  const starRating = (rating) => {
    let stars = "";
    for (let i = 0; i < rating; i++) {
      stars += "⭐";
    }
    return stars;
  };

  return (
    <li className={classes.post}>
      <p className={classes.author}>{name}</p>
      <p className={classes.text}>{greeting}</p>
      <p onClick={onStarClick}>{starRating(rating)}</p>
    </li>
  );
};

export default Post;
