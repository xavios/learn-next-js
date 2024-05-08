import classes from "./NewPost.module.css";

const NewPost = (props) => {
  function onKeyUpFactory(fieldToChange) {
    return (e) => {
      const newNamesAndGreetings = [...props.namesAndGreetings];
      newNamesAndGreetings[0][fieldToChange] = e.target.value;
      props.setNamesAndGreetings(newNamesAndGreetings);
    };
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onKeyUp={onKeyUpFactory("greeting")}
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          onKeyUp={onKeyUpFactory("name")}
        />
      </p>
    </form>
  );
};

export default NewPost;
