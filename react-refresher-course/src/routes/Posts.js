import "../components/Post";
import PostsList from "../components/PostsList";
import { Outlet, useLoaderData, defer, Await } from "react-router-dom";
import React from "react";

function randomInteger(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

export default function Posts() {
  const data = useLoaderData();

  // This is how to have a "loading" state with react-router-dom.
  // use defer, React.Suspense, Await and then it will work just fine.
  return (
    <>
      <Outlet />
      <main>
        <React.Suspense
          fallback={
            <div>
              <h1>Loading...</h1>
            </div>
          }
        >
          <Await
            resolve={data.namesAndGreetings}
            errorElement={<p>Error loading package location!</p>}
          >
            {(namesAndGreetings) => {
              return <PostsList posts={namesAndGreetings} />;
            }}
          </Await>
        </React.Suspense>
      </main>
    </>
  );
}

export async function loader() {
  const namesAndGreetings = fetch("http://localhost:8080/posts")
    .then((fetchResult) => {
      return fetchResult.json();
    })
    .then((result) =>
      result.posts
        .slice(0, randomInteger(1, result.posts.length - 1))
        .sort((a, b) => {
          return Math.random() > 0.5 ? 1 : -1;
        })
    );
  return defer({ namesAndGreetings: namesAndGreetings });
}
