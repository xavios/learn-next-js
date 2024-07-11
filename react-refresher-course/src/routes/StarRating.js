import React from "react";
import classes from "./NewPost.module.css";
import Modal from "../components/Modal";

const StarRating = ({ rating, setRating }) => {
  return (
    <Modal>
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
            min="1"
            max="5"
          ></input>
        </p>
      </form>
    </Modal>
  );
};

export default StarRating;
