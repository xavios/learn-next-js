import "../components/Post";
import PostsList from "../components/PostsList";
import { useState, useEffect } from "react";
import Modal from "../components/Modal";
import StarRating from "./StarRating";
import { Outlet } from "react-router-dom";

function randomInteger(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function Posts({ newPost = false }) {
  const [namesAndGreetings, setNamesAndGreetings] = useState([]);
  const [isFetchingPosts, setIsFetchingPosts] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:8080/posts").then(
        (result) => {
          setIsFetchingPosts(false);
          return result.json();
        }
      );

      setNamesAndGreetings(
        result.posts
          .slice(0, randomInteger(1, result.posts.length - 1))
          .sort((a, b) => {
            return Math.random() > 0.5 ? 1 : -1;
          })
      );
    };

    fetchData();
  }, []);

  return (
    <>
      <Outlet />
      <main>
        <PostsList posts={namesAndGreetings} fetching={isFetchingPosts} />
      </main>
    </>
  );
}

export default Posts;
