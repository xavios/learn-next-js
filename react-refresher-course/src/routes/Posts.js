import "../components/Post";
import PostsList from "../components/PostsList";
import { Outlet, useLoaderData, useNavigation } from "react-router-dom";

function randomInteger(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function Posts() {
  const namesAndGreetings = useLoaderData();
  const navigation = useNavigation();

  debugger;
  return (
    <>
      <Outlet />
      <main>
        <PostsList
          posts={namesAndGreetings}
          isFetching={navigation.state === "loading"}
        />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  return fetch("http://localhost:8080/posts")
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
}
