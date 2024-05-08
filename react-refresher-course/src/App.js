import "./components/Post";
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";
import NewPost from "./components/NewPost";
import Modal from "./components/Modal";

const defaultNamesAndGreetings = [
  { name: "Dorka", greeting: "Give me a high-five you donkey!" },
  { name: "Anna", greeting: "Daddychino!" },
  { name: "Andris", greeting: "What is up?" },
  { name: "Szimi", greeting: "Kuuckiii" },
  { name: "Tigi", greeting: "Woof woof!" },
  { name: "Jázmota", greeting: "*flees away**" },
  { name: "Cilike", greeting: "Mauw!" },
];

function randomInteger(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function App() {
  const [modalIsVisible, setModalVisibility] = useState(false);
  const [namesAndGreetings, setNamesAndGreetings] = useState(
    defaultNamesAndGreetings
      .slice(0, randomInteger(1, defaultNamesAndGreetings.length - 1))
      .sort((a, b) => {
        return Math.random() > 0.5 ? 1 : -1;
      })
  );

  return (
    <>
      <MainHeader
        onCreatePost={() => {
          setModalVisibility(true);
        }}
      />
      <main>
        {modalIsVisible && (
          <Modal
            showModal={modalIsVisible}
            closeModal={() => {
              setModalVisibility(false);
            }}
          >
            <NewPost
              setNamesAndGreetings={setNamesAndGreetings}
              namesAndGreetings={namesAndGreetings}
            />
          </Modal>
        )}
        <PostsList posts={namesAndGreetings} modalIsVisible={modalIsVisible} />
      </main>
    </>
  );
}

export default App;
