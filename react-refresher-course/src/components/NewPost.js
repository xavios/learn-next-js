import classes from "./NewPost.module.css";

const NewPost = (props) => {
  function onSubmit(e) {
    e.preventDefault();
    const newPost = {
      name: e.target.name.value,
      greeting: e.target.body.value,
      rating: props.randomRating,
    };
    props.setNamesAndGreetings((previous) => [newPost, ...previous]);
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
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
        <button type="button" onClick={props.cancel}>
          Cancel
        </button>
      </p>
    </form>
  );
};

export default NewPost;
