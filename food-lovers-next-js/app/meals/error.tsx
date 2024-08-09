"use client";

import React, { PropsWithoutRef } from "react";

function onClickHandler() {
  location.reload();
}

const MealsError = ({ error }: { error: Error }) => {
  return (
    <main className="error">
      <p>An error happened during fetching the meals. 😔</p>
      <p className="error-message">{error.message}</p>
      <p>
        <button onClick={onClickHandler}>Please try again!</button>
      </p>
    </main>
  );
};

export default MealsError;
