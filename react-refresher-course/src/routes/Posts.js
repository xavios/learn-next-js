import "../components/Post";
import PostsList from "../components/PostsList";
import { Outlet, useLoaderData, defer, Await } from "react-router-dom";
import React from "react";
import { randomInteger } from "../utils/misc";

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
            <div style={{ margin: "auto", width: "200px" }}>
              <h1>Loading...</h1>
            </div>
          }
        >
          <Await
            resolve={data.namesAndGreetings}
            errorElement={<p>Could not load posts.</p>}
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
    .then((result) => {
      console.log(JSON.stringify(result));
      return result.posts
        .slice(0, randomInteger(1, result.posts.length - 1))
        .sort((a, b) => {
          return Math.random() > 0.5 ? 1 : -1;
        });
    });
  return defer({ namesAndGreetings: namesAndGreetings });
}
