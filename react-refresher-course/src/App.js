import "./App.css";
import "./components/Post";
import Post from "./components/Post";

const namesAndGreetings = [
  { name: "Dorka", greeting: "Give me a high-five you donkey!" },
  { name: "Anna", greeting: "Daddyhino!" },
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
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
        <main>
          {namesAndGreetings
            .slice(0, randomInteger(1, namesAndGreetings.length - 1))
            .map(({ name, greeting }, idx) => {
              return <Post name={name} greeting={greeting} key={idx}></Post>;
            })}
          <p>React JS is awesome!</p>
        </main>
      </header>
    </div>
  );
}

export default App;
