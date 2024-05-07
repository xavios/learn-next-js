const NewPost = (props) => {
  return (
    <div>
      <p>
        Name:{" "}
        <input
          type="text"
          name="name"
          onKeyUp={(e) => {
            const newNamesAndGreetings = [...props.namesAndGreetings];
            newNamesAndGreetings[0].name = e.target.value;
            props.setNamesAndGreetings(newNamesAndGreetings);
          }}
        ></input>
      </p>
      <p>
        Greeting: <textarea name="greeting"></textarea>
      </p>
    </div>
  );
};

export default NewPost;
