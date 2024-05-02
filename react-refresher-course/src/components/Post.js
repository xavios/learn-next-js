import React from "react";

const Post = ({ name, greeting }) => {
  return (
    <section>
      <p>
        <strong>{name}</strong> greets you: "{greeting}"
      </p>
    </section>
  );
};

export default Post;
