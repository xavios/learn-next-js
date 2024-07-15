import Modal from "../components/Modal";
import classes from "./NewPost.module.css";
import { Link, Form, redirect } from "react-router-dom";
import { randomInteger } from "../utils/misc";

export async function action({ request }) {
  const formData = await request.formData();
  const postedData = Object.fromEntries(formData);
  const toPost = {
    name: postedData.name,
    greeting: postedData.body,
    rating: postedData.starRating,
  };
  await fetch("http://localhost:8080/new-post", {
    method: "POST",
    body: JSON.stringify(toPost),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("/");
}

const NewPost = () => {
  return (
    <Modal>
      <Form className={classes.form} method="post">
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="name" required />
        </p>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <input
          type="hidden"
          id="starRating"
          name="starRating"
          value={randomInteger(1, 5)}
        />
        <p className={classes.actions}>
          <button type="submit">Post!</button>
          <Link to="/">
            <button type="button">Cancel</button>
          </Link>
        </p>
      </Form>
    </Modal>
  );
};

export default NewPost;
