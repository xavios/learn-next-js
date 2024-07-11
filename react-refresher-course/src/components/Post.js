import React from "react";
import classes from "./Post.module.css";
import { Link } from "react-router-dom";

const Post = ({ name, greeting, rating }) => {
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
      <p>
        <Link to="star-rating" className={classes.starRating}>
          {starRating(rating)}
        </Link>
      </p>
    </li>
  );
};

export default Post;
