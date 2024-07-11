import Modal from "../components/Modal";
import classes from "./NewPost.module.css";
import { Link } from "react-router-dom";

const NewPost = (props) => {
  function onSubmit(e) {
    e.preventDefault();
    const newPost = {
      name: e.target.name.value,
      greeting: e.target.body.value,
      rating: props.randomRating,
    };
    props.addPost((previous) => [newPost, ...previous]);
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={onSubmit}>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required />
        </p>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} />
        </p>
        <p className={classes.actions}>
          <button type="submit">Post!</button>
          <Link to="/">
            <button type="button">Cancel</button>
          </Link>
        </p>
      </form>
    </Modal>
  );
};

export default NewPost;
