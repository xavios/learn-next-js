"use client";

import React from "react";

const Error = ({ error }: { error: Error }) => {
  return (
    <div className="error">
      <h2>An error has occurred.</h2>
      <p>{error.message}</p>
    </div>
  );
};

export default Error;
