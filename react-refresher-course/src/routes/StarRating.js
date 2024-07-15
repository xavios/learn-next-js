import React from "react";
import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
import { useLoaderData, redirect, Form, useSubmit } from "react-router-dom";

export async function loader({ params }) {
  const data = await fetch(`http://localhost:8080/posts/${params.id}`).then(
    (result) => result.json()
  );
  return data;
}

export async function action({ request }) {
  debugger;
  const formData = await request.formData();
  const postedData = Object.fromEntries(formData);
  await fetch(`http://localhost:8080/posts/${postedData.id}`, {
    method: "POST",
    body: JSON.stringify({ rating: postedData.rating }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return redirect("/");
}

const StarRating = () => {
  const { post } = useLoaderData();
  const submit = useSubmit();
  return (
    <Modal>
      <Form
        className={classes.form}
        method="POST"
        name="starRating"
        onChange={(event) => {
          submit(event.currentTarget);
        }}
      >
        <label htmlFor="rating">Set a rating!</label>
        <p>
          <input type="hidden" name="id" value={post.id} />
          <input
            name="rating"
            type="number"
            value={post.rating}
            min="1"
            max="5"
          ></input>
        </p>
      </Form>
    </Modal>
  );
};

export default StarRating;
