import React from "react";
import Link from "next/link";

const notFound = () => {
  return (
    <main className="not-found">
      <h1>Meal not found</h1>
      <p>Sorry, but we do not found the meal that you are looking for.</p>
      <p>
        <Link href="/meals">Go back to the meals!</Link>
      </p>
    </main>
  );
};

export default notFound;
