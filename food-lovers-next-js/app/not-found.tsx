import React from "react";
import Link from "next/link";

const FoodiesAppNotFound = () => {
  return (
    <main className="not-found">
      <h1>Not found</h1>
      <p>The resource is not found.</p>
      <p>
        <Link href="/">Go back to the home page!</Link>
      </p>
    </main>
  );
};

export default FoodiesAppNotFound;
