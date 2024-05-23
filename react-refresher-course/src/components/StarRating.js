import React from "react";
import classes from "./NewPost.module.css";

const StarRating = ({ rating, setRating }) => {
  return (
    <>
      <form className={classes.form}>
        <label htmlFor="rating">Set a rating!</label>
        <p>
          <input
            name="rating"
            type="number"
            value={rating}
            onChange={(e) => {
              setRating(e.target.value);
            }}
          ></input>
        </p>
      </form>
    </>
  );
};

export default StarRating;
