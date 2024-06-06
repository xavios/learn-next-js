## About the course

Go through the videos on your on pace.
Try out the next steps on your own.
Also revisit the projects and try to rebuild them without the videos.

https://github.com/mschwarzmueller/nextjs-complete-guide-course-resources
https://github.com/mschwarzmueller/nextjs-course-code

Q&A section + Discord server is available.

## Next.JS

Built on top of React.

Fetching and handling data.
Handling form submission becomes more easy.

Routing happens in the file system. --> ** file-based routing **

Server-Side Rendering --> SEO friendly.

---

nexjs.org

`npx create-next-app@latest`

Pages are rendered on the server

### Routers

#### App Router

Relatively new way - was introduced with v13.

#### Pages Router

Older, more stable way on how we can do the routing.

`npm run dev`

With next.js you can build full stack applications with utilizing React.

app/awesome/page.js

## React Refresher

https://github.com/academind/react-complete-guide-course-resources/tree/main/code/30%20React%20Summary

React is a javascript library to build user interfaces.
We are going to write javascript code to create highly interactive user interfaces.

Imperative (jQuery, default javascript way) vs declarative code (React).

_Declarative programming_ is a paradigm that focuses on what the program should
achieve, without explicitly stating how to achieve it. It is a high-level concept
that abstracts the intricacies of the underlying system.

_Imperative programming_ is a paradigm where you explicitly state how the program
should achieve the desired result. You write step-by-step instructions for the
computer to follow.

Codewhisperer --> AI code generator, I don't think that I am going to need that
for this course :)

_Create React App_
or Vite

`npx create-react-app`

JSX files

src/main.js

```
import React from 'react';
import ReactDOM from 'react-dom/client';
```

React.ScriptMode - warnings regarding to sub-optimal code usage.
https://react.dev/reference/react/StrictMode

Typically functions that return JSX are called components.

Any website that you can think of is built up by building blocks - components.

> We will build a Twitter like demo app!

React components are just functions, but the name of the function MUST be upper-
case. Elements that start with lower case chars are treated by React as default
html tags.

`<h1>{4+4}</h1>` whatever is in the curly braces is calculated by the JS engine

`rafce` --> React Functional Component skeleton ins VSCode.

An element must return with a highest level tag / component.
You can use self closing tags, like `<Post />`

JS `Array.prototype.map(callbackFn)` callbackFn function can have 3 arguments:

- element
- index
- array

Props enable us to pass arguments to our components.

`className` can be added to the components, but this can have css class name
clashes.

Use `Post.module.css` to use css modules.
`import classes from "./Post.module.css";` and then `className={classes.post}`

This ensures unique class names throughout the whole application.

`Array.prototype.sort(compareFn)`
Compare function should return a number where:

- A negative value indicates that a should come before b.
- A positive value indicates that a should come after b.
- Zero or NaN indicates that a and b are considered equal.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

#### State

`const [state, setState] = useState(defaultValue)`
And then the stateful value and the setState fn can be prop drilled down to
other components and we can traverse the data through the component hierarchy.

If a website is dynamic, then it can have different states. React can manage the
states of the website. It can register a changing state and can create a function
to set a new state for the changing part. If the setState is called, a rerender
happens.

In JS functions are totally normal values (objects), thus they can be passed
around.

React hook --> must execute in React component functions.
Array destructuring.

##### Lifting the state up

State in component A, but event that would update the state
in component B - then you need to find their shared first parent and lift the
state up there and props drill down the setState function to component B and the
state to component A.

---

**2024.05.23.**

To get back to the topic, I have implemented another modal window and some new
state handling for setting the star ratings for the individual posts. I lifted
the state to the App component.

If the new state depends on the old state, you need to use the function callback
trick, so that the order of the state updates will be correct. React does not
instantly updates the states, but schedules the work for later on. With this trick
we guarantee, that the states will be updated in the correct order.

```js
const [state, setState] = useState([1, 2, 3]);
setState((previous) => [...previous, 4]);
```

### useEffect

React components are just functions. They should be pure functions: no side effects.
Pure function: for an input produce a reliable output. Ie.: receive props, return
predictable jsx components.

Manipulating side effects should be separated from rendering, in order to make sure
that the side effect does not get in the way of the rendering. If we need to perform
a side effect we would need to do that **after** the rendering.

In short, useEffect is a tool that lets us interact with the outside world but
not affect the rendering or performance of the component that it's in.

```js
import { useEffect } from "react";

function MyComponent() {
  useEffect(() => {}, []);
}
```

useEffect has a callback function and a dependencies array. If the deps array is
not given it will run the callback on each re-render.

```js
/* in dummy-backend folder */
npm start
/* in react-refresher-course folder */
npm start
```

## Things to check on

- _CSS grid_ is used in the CSS, so I think further down I should learn it.
- Common js vs Es module?
- HTML5 dialog tag
