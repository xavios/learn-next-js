import "./components/Post";
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";
import NewPost from "./components/NewPost";
import Modal from "./components/Modal";
import StarRating from "./components/StarRating";

const defaultNamesAndGreetings = [
  { name: "Dorka", greeting: "Give me a high-five you donkey!", rating: 2 },
  { name: "Anna", greeting: "Daddychino!", rating: 4 },
  { name: "Andris", greeting: "What is up?", rating: 3 },
  { name: "Szimi", greeting: "Kuuckiii", rating: 5 },
  { name: "Tigi", greeting: "Woof woof!", rating: 2 },
  { name: "Jázmota", greeting: "*flees away**", rating: 3 },
  { name: "Cilike", greeting: "Mauw!", rating: 1 },
];

function randomInteger(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function App() {
  const [newPostModalIsVisible, setNewPostModalIsVisible] = useState(false);
  const [namesAndGreetings, setNamesAndGreetings] = useState(
    defaultNamesAndGreetings
      .slice(0, randomInteger(1, defaultNamesAndGreetings.length - 1))
      .sort((a, b) => {
        return Math.random() > 0.5 ? 1 : -1;
      })
  );

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
