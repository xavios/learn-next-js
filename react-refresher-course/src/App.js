import "./components/Post";
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
import { useState, useEffect } from "react";
import NewPost from "./components/NewPost";
import Modal from "./components/Modal";
import StarRating from "./components/StarRating";

function randomInteger(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function App() {
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

  const [newPostModalIsVisible, setNewPostModalIsVisible] = useState(false);

  const [starModalVisible, setStarModalVisible] = useState(false);
  const [starRatingEditIndex, setStarRatingEditIndex] = useState(null);
  return (
    <>
      <MainHeader
        onCreatePost={() => {
          setNewPostModalIsVisible(true);
        }}
      />
      <main>
        {newPostModalIsVisible && (
          <Modal
            closeModal={() => {
              setNewPostModalIsVisible(false);
            }}
          >
            <NewPost
              setNamesAndGreetings={(namesAndGreetings) => {
                setNamesAndGreetings(namesAndGreetings);
                setNewPostModalIsVisible(false);
              }}
              namesAndGreetings={namesAndGreetings}
              cancel={() => {
                setNewPostModalIsVisible(false);
              }}
              randomRating={randomInteger(1, 5)}
            />
          </Modal>
        )}
        {starModalVisible && (
          <Modal
            closeModal={() => {
              setStarModalVisible(false);
            }}
          >
            <StarRating
              rating={namesAndGreetings[starRatingEditIndex].rating}
              setRating={(rating) => {
                setNamesAndGreetings((previous) => {
                  const copy = [...previous];
                  copy[starRatingEditIndex].rating = rating;
                  return copy;
                });
              }}
            />
          </Modal>
        )}

        <PostsList
          posts={namesAndGreetings}
          fetching={isFetchingPosts}
          onStarClick={(index) => {
            setStarRatingEditIndex(index);
            setStarModalVisible(true);
          }}
        />
      </main>
    </>
  );
}

export default App;
