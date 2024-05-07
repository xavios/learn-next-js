import { useState } from "react";
import "./App.css";
import NewPost from "./components/NewPost";
import "./components/Post";
import PostsList from "./components/PostsList";

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
  const [namesAndGreetings, setNamesAndGreetings] = useState(
    defaultNamesAndGreetings
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
        <main>
          <PostsList
            posts={namesAndGreetings
              .slice(0, randomInteger(1, defaultNamesAndGreetings.length - 1))
              .sort((a, b) => {
                if (a.name === namesAndGreetings[0].name) {
                  return -1;
                }
                return Math.random() > 0.5 ? 1 : -1;
              })}
          />

          <NewPost
            setNamesAndGreetings={setNamesAndGreetings}
            namesAndGreetings={namesAndGreetings}
          />
          <p>React JS is awesome!</p>
        </main>
      </header>
    </div>
  );
}

export default App;
